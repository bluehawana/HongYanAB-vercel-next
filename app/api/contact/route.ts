import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Contact form API route - stores submissions in Cloudflare R2
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Check for R2 credentials
    const r2AccountId = process.env.CF_ACCOUNT_ID;
    const r2AccessKeyId = process.env.CF_R2_ACCESS_KEY_ID;
    const r2SecretAccessKey = process.env.CF_R2_SECRET_ACCESS_KEY;
    const r2BucketName = process.env.CF_R2_BUCKET_NAME;

    if (!r2AccountId || !r2AccessKeyId || !r2SecretAccessKey || !r2BucketName) {
      console.error("Cloudflare R2 credentials are not configured");
      return NextResponse.json(
        { error: "Storage service is not configured" },
        { status: 500 },
      );
    }

    // Create S3 client for Cloudflare R2
    const s3Client = new S3Client({
      region: "auto",
      endpoint: `https://${r2AccountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: r2AccessKeyId,
        secretAccessKey: r2SecretAccessKey,
      },
    });

    // Create contact submission object
    const timestamp = new Date().toISOString();
    const submissionId = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    const contactSubmission = {
      id: submissionId,
      name,
      email,
      company: company || null,
      message,
      submittedAt: timestamp,
      userAgent: request.headers.get("user-agent") || null,
    };

    // Generate filename with date organization
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const filename = `contacts/${year}/${month}/${day}/${submissionId}.json`;

    // Upload to Cloudflare R2
    const command = new PutObjectCommand({
      Bucket: r2BucketName,
      Key: filename,
      Body: JSON.stringify(contactSubmission, null, 2),
      ContentType: "application/json",
    });

    await s3Client.send(command);

    console.log("Contact submission saved:", filename);

    return NextResponse.json(
      { success: true, message: "Contact submission saved successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

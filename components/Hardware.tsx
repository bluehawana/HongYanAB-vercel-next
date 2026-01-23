export default function Hardware() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Simplified hardware experience */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 mb-3 tracking-wide uppercase">
            Enterprise Hardware
          </p>
          <h3 className="text-2xl font-light text-secondary mb-6">
            Trusted by <span className="font-semibold">Leading Brands</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center opacity-60 hover:opacity-100 transition-opacity">
              <div className="text-2xl font-semibold text-gray-700">Dell</div>
              <p className="text-xs text-gray-500 mt-1">PowerEdge</p>
            </div>
            <div className="text-center opacity-60 hover:opacity-100 transition-opacity">
              <div className="text-2xl font-semibold text-gray-700">Huawei</div>
              <p className="text-xs text-gray-500 mt-1">Enterprise</p>
            </div>
            <div className="text-center opacity-60 hover:opacity-100 transition-opacity">
              <div className="text-2xl font-semibold text-gray-700">H3C</div>
              <p className="text-xs text-gray-500 mt-1">Infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

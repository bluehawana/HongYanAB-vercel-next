export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-secondary">
              About Hong Yan AB
            </h2>
            <p className="text-gray-600 mb-4">
              Hong Yan AB is a leading professional services company dedicated to helping
              businesses achieve their goals through innovative solutions and strategic guidance.
            </p>
            <p className="text-gray-600 mb-4">
              With years of experience and a commitment to excellence, we provide comprehensive
              business consulting, project management, and digital transformation services to
              companies across various industries.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of experts works closely with each client to understand their unique
              challenges and develop customized solutions that drive growth and success.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary">100+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-light to-primary-dark h-96 rounded-lg flex items-center justify-center">
            <div className="text-white text-6xl">🏢</div>
          </div>
        </div>
      </div>
    </section>
  )
}
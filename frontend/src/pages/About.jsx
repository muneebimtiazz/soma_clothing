
import { FaAward, FaUsers, FaProjectDiagram } from 'react-icons/fa'
import Banner from '../assets/clothes-web.png'

const About = () => {
  return (
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <div className='sm:block hidden max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
      <img src={Banner} alt="banner" className="w-full h-auto object-contain" />
    </div>
    

      <section className="py-5">
        <div className="bg-white p-5 rounded shadow-sm border border-gray-100">
          <h1 className='text-2xl sm:text-4xl text-center font-semibold uppercase'>about soma clothing</h1>
          <div className="space-y-4 sm:text-left text-justify">
            <p>
              Founded in 2025, Soma Clothing is a contemporary men's fashion brand dedicated to blending timeless style with modern functionality. We specialize in crafting high-quality apparel that balances sophistication and comfort, offering versatile pieces designed for the dynamic lifestyles of today's men. From sharp tailored essentials to relaxed casual wear, our collections prioritize premium fabrics, precise craftsmanship, and effortless versatility ensuring every garment transitions seamlessly from work to weekends.
            </p>
            <p>
              At Soma, we believe in elevated simplicity. Our designs avoid fleeting trends in favor of clean silhouettes, thoughtful details, and enduring appeal. Whether it's a crisp polo for summer or a structured blazer for evening wear, each piece is created to empower confidence and individuality.
            </p>
            <p>
              More than just clothing, we're building a community for men who value intentional style. Welcome to Soma—where every stitch tells a story.
            </p>
          </div>
        </div>
      </section>


      <section className="py-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-8 rounded-xl text-center border border-gray-200">
            <FaAward className="mx-auto text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">3+</h3>
            <p className="text-gray-600">Industry Awards</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center border border-gray-200">
            <FaUsers className="mx-auto text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">25k+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center border border-gray-200">
            <FaProjectDiagram className="mx-auto text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">110+</h3>
            <p className="text-gray-600">Quality Products</p>
          </div>
        </div>
      </section>


      <section className="pb-10">
          <h1 className='text-2xl sm:text-4xl text-center font-semibold uppercase '>meet our team</h1>
        <p className='text-justify sm:text-center mb-10'>Meet the passionate minds behind Soma Clothing a creative team dedicated to redefining men's fashion with innovation and precision.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Alex Johnson", role: "CEO & Founder", bio: "Visionary leader with 15+ years of e-commerce experience" },
            { name: "Sarah Williams", role: "Head of Design", bio: "Creative director focused on user experience" },
            { name: "Michael Chen", role: "CTO", bio: "Technology innovator and systems architect" },
            { name: "Emily Rodriguez", role: "Customer Success", bio: "Dedicated to exceptional service experiences" }
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-gray-100 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-primary">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-semibold mb-1 text-center">{member.name}</h3>
              <p className="text-primary mb-2 text-center">{member.role}</p>
              <p className="text-gray-600 text-sm text-center">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About

import Banner from '../assets/contact_banner.png'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 ">
          <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
              <img src={Banner} alt="banner" className="w-full h-auto object-contain" />
          </div>
          <div className='text-center py-5 m-10 md:m-0'>

            <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
            <p className="text-black">
              For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>
      
      <div className="py-16 grid md:grid-cols-2 m-10 md:m-5">

       {/* Contact Cards */}
<div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 font-[Open Sans]">
      {/* Left Text Block */}
      <div>
        <p className="text-lg text-gray-800">
          For any inquiries, collaborations, or just to say hello, we’d love to hear from you! Reach out, and let’s connect.
        </p>
      </div>

      {/* Right Info Block */}
      <div className="space-y-10">
        <div>
          <h3 className="text-xl font-bold mb-2">PRESS</h3>
          <p className="text-gray-700">
            SOMA CLOTHING CO. (MILAN OFFICE)<br />
            Centro Direzionale Milanofiori, Strada 2,<br />
            PALAZZO C1, 20057 Assago Milano, Italy<br /><br />
            PR Contact: <br />
            <a href="mailto:press@soma-clothing.com" className="text-blue-600 hover:underline">press@soma-clothing.com</a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">SALES</h3>
          <p className="text-gray-700">
            SOMA SHOWROOM<br />
            <a href="mailto:sales@soma-clothing.com" className="text-blue-600 hover:underline">sales@soma-clothing.com</a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">HEAD OFFICE</h3>
          <p className="text-gray-700">
            SOMA CLOTHING CO.<br />
            2806, Fashion Avenue,<br />
            Gangnam-Gu, Seoul,<br />
            Republic of Korea<br />
            <a href="mailto:hello@soma-clothing.com" className="text-blue-600 hover:underline">hello@soma-clothing.com</a>
          </p>
        </div>
      </div>
    </div>

        {/* Contact Form */}
        <div className="bg-white mt-5 mb-5 p-5 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message*
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              ></textarea>
            </div>

        <button type='submit'
          className="py-2 w-full text-black border-1 bg-white hover:bg-black hover:text-white transition-colors">
          Send
        </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
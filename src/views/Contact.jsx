import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <div className="Main">
        <div className="wrapper">
            <Navbar/>
            <ContactForm/>
            <Footer/>
        </div>
    </div>
  )
}

export default Contact
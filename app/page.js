import Contact from "@/components/Contact"
import Faq from "@/components/Faq"
import Footer from "@/components/Footer"
import HomePage from "@/components/Home"
import AboutMe from "@/components/Majors"
import Order from "@/components/Order"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import React from "react"

function page() {
	return (
    <>
    <HomePage/>
    <AboutMe/>
    <Projects/>
    <Faq/>
    <Services/>
    <Order/>
    <Contact/>
    <Footer/>
    </>

    )
}

export default page

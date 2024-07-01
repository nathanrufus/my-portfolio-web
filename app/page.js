import Faq from "@/components/Faq"
import HomePage from "@/components/Home"
import AboutMe from "@/components/Majors"
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
    </>

    )
}

export default page

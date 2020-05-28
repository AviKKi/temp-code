import React, { useState } from "react"
import SEO from "../components/seo"
import Header from '../components/Header'

const data = {
  header: {
    title: 'Hire top-notch programmers. Free of cost.',
    subTitle: 'Choose from our pool of full-stack engineers, or have us assemble an entire team for you from among India’s top 1% software engineering talent.',
    btnLabel: 'Hire an Engineer',
    btnLink: '/apply/partner',
  }
}


export default () => {

  return (
    <>
      <SEO
        title="AlogoUniversity: Launchpad"
        description="AlogoUniversity: Launchpad"
      />
      <Header {...data.header} />
    </>
  )
}

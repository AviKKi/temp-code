import React, { useState } from "react"

import SEO from "../components/seo"
import Header from '../components/Header'
import LeftPadArticle from "../components/Home/LeftPadArticle";
import styled from '@emotion/styled'

const data = {
  header: {
    title: 'Hire Top-Grade Remote Engineers From India.',
    subTitle: 'We are AlgoUniversity, a technology education company. We train and upskill India’s top talent for fast-paced product companies across the globe and we would love to be a part of your remote journey.',
    btnLabel: 'Get Started',
    btnLink: '/hire',
  },
  second: {
    title: 'We are NOT a learn-to-code bootcamp',
    subTitle: 'AlgoUniversitie\'s Launchpad trains and invests in India\'s top software engineering talent. We are not a learn-to-code Bootcamp. Our typical student has a CS degree and several years of relevant work experience prior to joining our Launchpad program.',
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
      <LeftPadArticle title={data.second.title} subTitle={data.second.subTitle} />
    </>
  )
}

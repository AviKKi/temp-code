import React, { useState } from "react"
import SEO from "../components/seo"
import Header from '../components/Header'

const data = {
  header: {
    title: 'Move beyond your country. Unlock global job opportunities.',
    subTitle: '',
    btnLabel: 'Learn Remotely',
    btnLink: '/apply/student',
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

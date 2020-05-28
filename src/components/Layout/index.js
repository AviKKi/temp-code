import React from "react"
import Header from "./header"
import styled from "@emotion/styled"

const Page = styled.div`

`

const Layout = ({ children, width = 1000 }) => {
  return (
    <>
      <Page>
        {children}
      </Page>
    </>
  )
}

export default Layout

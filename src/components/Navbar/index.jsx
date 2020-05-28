import React from 'react'
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
  width: 100%;
  padding: 32px 10px;
  position: relative !important; 
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  color: #FFF;
`
const A = styled.a`
  text-shadow: none !important;
  color: #fff;
  text-decoration: none;
`
const Nav = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`
const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`
const MenuItem = styled.li`
  padding: 0 0 10px 32px;
`
export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "images" }, name: { eq: "icon" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <Wrapper>
    <a href="/">
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt=""
        style={{ padding: "0px", width: "70px" }}
      />
    </a>
    <Nav>
      <Menu>
        <MenuItem><A href="/hire">Hire</A></MenuItem>
        <MenuItem><A href="/learn">Learn Remotely</A></MenuItem>
      </Menu>
    </Nav>
  </Wrapper>
}
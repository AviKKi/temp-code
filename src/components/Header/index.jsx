import React from 'react'
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from '../Navbar'
import Button from '../Button'


const DarkOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
`

const Title = styled.h2`
  color: #FFF;
  font-size: 36px;

  font-size: 80px;
  @media (max-width: 991px) {
    font-size: 56px;
  }
  @media (max-width: 767px) {
    font-size: 36px;
  }
`

const SubTitle = styled.p`
  color: #FFF;
  font-size: 16px;
  max-width: 500px;
  @media min-width(767px){
    font-size: 12px;
  }
`

const Content = styled.div`
  padding: 0 30px;
  position: relative;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    font-size: 587px;
  }
  padding-bottom: 30px;
`

export default ({ title, subTitle, btnLink, btnLabel, backgroundImage, }) => {
  backgroundImage = backgroundImage || 'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80'
  const Wrapper = styled.div`
    background: url(${backgroundImage}) ;
    min-height: 100vh;
    width: 100%;
    position: relative;
    `

  return <Wrapper>
    <DarkOverlay />
    <Navbar />
    <Content>
      <Title>
        {title}
      </Title>
      <SubTitle>
        {subTitle}
      </SubTitle>
      <Button href={btnLink} >
        {btnLabel}
      </Button>
    </Content>
  </Wrapper>
}
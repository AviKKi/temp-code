import styled from '@emotion/styled'
import React, { useState } from "react"


const Title = styled.h2`
  color: #444444;
  font-size: 36px;
  max-width: 830px;
  margin-top: 0;
  line-height: 1.1em;
  width: 70%;
  font-size: 90px;
  @media (max-width: 991px) {
    font-size: 56px;
    line-height: 1;
  }
  @media (max-width: 767px) {
    font-size: 36px;
    width: 50%;
  }
`
const Container = styled.div`
  padding-top: 5%;
  padding-left: 135px;
  min-height: 100vh;
  background-color: #f7f7f7;
  @media (max-width: 991px) {
    padding-left: 80px;
  }
  @media (max-width: 767px) {
    padding-left: 40px;
  }
`
const SubTitle = styled.p`
  color: #777;
  width: 70%;
  @media (max-width: 991px) {
    width: 80%;
  }
  @media (max-width: 767px) {
    width: 90%;
  }
`

export default ({ title, subTitle }) => (
  <Container>
    <Title>
      {title}
    </Title>
    <SubTitle>
      {subTitle}
    </SubTitle>
  </Container>
)
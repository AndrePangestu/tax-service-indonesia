import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { ContentStyles, LayoutStyles } from './Styles'

export default function LayoutPages(props) {
  return (
    <LayoutStyles>
      <Header/>
      <ContentStyles>
        {props.children}
      </ContentStyles>
      <Footer/>
    </LayoutStyles>
  )
}

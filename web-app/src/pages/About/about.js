import React, { Fragment } from 'react'
import '../../assets/css/index.scss'

class About extends React.Component {
  render () {
    return (
      <>
        <div className='main'>
          <h2>About this page</h2>
          <p>
            This page was made using React.JS to show some Front-end concepts
            that I know and was made to be used like
            a programming example with this technologie for some
            technical interview, just to show a structure that I alredy used.
          </p>
          <p>
            Of course that exists others methods and ways to use a Front-end desing
            ,but my idea, was show some technical knowledge
            that I have with React.JS, Css and Javascript.
          </p>
          <p>
            I used some libs, but I tried to make the components and style using
            "pure" Css and Javascript, as I saw, just to show an example.
            <br />I used class instead
            functions, other thing that I guess important is a pure component. I am not
            a specialist in desinger with Css,
            but I tried to make my best.
          </p>
          <br />
          <p className='singature'>
            Leonardo Vieira
          </p>
        </div>
      </>
    )
  }
}

export default About

import React, { useEffect, useRef } from 'react'
import pdf from '../components/pdf/resume.pdf'
import Nik_photo from './data/Nik_photo.json'
import Typed from 'typed.js'


const Home = () => {

  const typedRef= useRef(null)

  useEffect(()=>{
    const options ={
      strings : ["Welcome to my profile","My Name is Nikhil Mowade","I'm full stack developer","Java developer","React developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true

    }

    const typed = new Typed(typedRef.current,options)

    return()=>{
      typed.destroy()
    }

  },[])

  return (
    <>
      <div className="container home" id='home'>
        <div className="left" data-aos="fade-up-right"
      data-aos-duration="1000" >
          <h1 ref={typedRef}>

          </h1>

          <a href={pdf} download="resume.pdf" className="btn btn-outline-warning my-3">Downlode Resume</a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left"
      data-aos-duration="1000" >
            <img src={`/assets/${Nik_photo.imgSrc}`} alt="hero" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
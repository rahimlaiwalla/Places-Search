import React from 'react';
import VideoThumbnail from 'react-video-thumbnail';

const About = () => {
  return(
    <section className='underHeader aboutUnderHeader'>
      <h1>About Page</h1>
      <div className="intro">
        <section className="welcome">
          <p>{`Welcome to my portfolio, I'm Rahim.`}</p>
          <p>
            {`I am a Front-End Web Developer, Mobile App Developer, and Full-Stack Engineer based out of 
              San Francisco, CA.`}
            <span>{` Let's Build!`}</span>
          </p>
        </section>
        <aside className="pictureAside">
          <img src={'./MyPicture.jpg'} className="myPicture"></img>
        </aside>
      </div>
      <section className="projects">
        <h4 className="projectTitle">{'Technical Projects'}</h4>
        <div className="intro">
          <a href="http://www.youtube.com/watch?v=0sbBVIrHBH0" className="haveARideImg">
            <img src="http://img.youtube.com/vi/0sbBVIrHBH0/0.jpg" width="300px" height="150px"></img>
          </a>
          <div className="haveARide_description">Describe Here</div>
        </div>
        <div className="intro fecBlock">
          <div className="fecImg">
            <a href="http://www.https://www.youtube.com/watch?v=pw1gRCi-kTc" className="fecSoloImage">
              <img src="http://img.youtube.com/vi/pw1gRCi-kTc/0.jpg" width="145px" height="150px"></img>
            </a>
            <a href="https://www.youtube.com/watch?time_continue=27&v=AqoNIFAyKyc&feature=emb_title" >
              <img src="http://img.youtube.com/vi/AqoNIFAyKyc/0.jpg" width="145px" height="150px"></img>
            </a>
          </div>
          <div className="fec_description">Describe Here</div>
        </div>
      </section>
    </section>
  )
}

export default About;
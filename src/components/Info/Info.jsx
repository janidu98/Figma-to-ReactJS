import './info.css'

const Info = () => {
  return (
    <section className='info'>
      <div className="wrapper">
        <div className="info-content">
          <div className="student">
            <img src="../../src/assets/student.svg" alt="studentImage" />
            <h3>23,000+</h3>
            <p>Students</p>
          </div>
          <div className="file">
            <img src="../../src/assets/videofile.svg" alt="fileImage" />
            <h3>26 Hrs</h3>
            <p>Video Content</p>
          </div>
        </div>

        <img src="../../src/assets/icon2.svg" alt="iconImg2" className='iconImg2'/>

      </div>
    </section>
  )
}

export default Info

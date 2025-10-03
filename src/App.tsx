import Navbar from './components/Navbar.tsx'
import './App.css'

{/* Should probably change how image asset imports work soon */}
import ieeeLogo from './assets/Logo_V5.png'
import calendarIcon from './assets/calendar-days_9795331.svg'
import peopleIcon from './assets/people-group_18556819.svg'
import capIcon from './assets/graduation-cap_3914110.svg'
import miniImage1 from './assets/sheldon1.png'
import miniImage2 from './assets/sheldon2.png'
import miniImage3 from './assets/sheldon3.png'
import stevenHere from './assets/IMG_2761.jpg'

function App(){
  return(
    <>
      {/* Background layer */}
      <div className='background'/>

      {/* Content overlay */}
      <div className='content'>
        {/* Navigation bar */}
        <Navbar/>

        {/* Top logo and text */}
        <a href="https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/671ff422cf42c0c857f6997c_97.png" target="_blank">
          <img src={ieeeLogo} className="logo" alt="IEEE logo"/>
        </a>
        <h2 className='topText'>WHERE PEOPLE THAT DIDN'T GET ACCEPTED INTO UT AUSTIN GO</h2>
        <h2 className='bottomText'>We're still better tho...</h2>

        {/* Test button */}
        <div>
          <button className='badassButton'>
            Become a member
          </button>
          <button className='badassButton'>
            Become a sponsor
          </button>
        </div>

        {/* Mini panels with photos n stuff */}
        <div className='miniFrameContainer'>
          <div className='miniFrame'>
            <img src={miniImage1} className='miniFrameBackground'/>
            <img src={calendarIcon} className='miniFrameIcon'/>
            <h1 className='miniFrameTitle'>Weekly events</h1>
            <p className='miniFrameBody'>Year-round events, socials, 
            and workshops with catered ZA!
            </p>
          </div>
          <div className='miniFrame'>
            <img src={miniImage2} className='miniFrameBackground'/>
            <img src={peopleIcon} className='miniFrameIcon'/>
            <h1 className='miniFrameTitle'>Community and networking</h1>
            <p className='miniFrameBody'>Meet students, professors, and recruiters
            for both casual and competitive networking!
            </p>
          </div>
          <div className='miniFrame'>
            <img src={miniImage3} className='miniFrameBackground'/>
            <img src={capIcon} className='miniFrameIcon'/>
            <h1 className='miniFrameTitle'>Academic support</h1>
            <p className='miniFrameBody'>Get help from upperclassman and other
            students! We know you suck, so we're here to help!
            </p>
          </div>
        </div>

        {/* Small text blurb */}
        <div className='boutUs'>
          <div className='boutUsTextBox'>
            <h1>A little about us...</h1>
            <p>Our goal is to provide a community for ECE students to connect, making
              engineering/college a little less daunting!</p>
            <p>Almost all of our events are free and we provide za sometimes!</p>
          </div>
          <div className='boutUsDiv'></div>
          <img src={stevenHere}/>
        </div>

      </div>
    </>
  )
}

export default App

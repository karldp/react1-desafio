import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FirstCard from './assets/components/FirstCard'
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'
import SkullKid from './assets/Imgs/skull_kid.png'
import Toonlink from './assets/Imgs/toon_link.jpg'
import Darunia from './assets/Imgs/darunia.png'
import Bluecucco from './assets/Imgs/blue_cucco.png'


function App() {
  return (
    <>
      <header>
        <Header title='CHOOSE YOUR CHARACTER AND PLAY' />
      </header>
      <section className='cards-section'>
        <div className='card_image'>
          <FirstCard
            picture={SkullKid}
            title='Skull Kid'
            description="Mischievous forest imp in Legend of Zelda."
            TagName="Troubled kid"
            TagBackground="warning"
          />
        </div>

        <div className='card_image'>
          <FirstCard
            picture={Toonlink}
            title='Toon Link'
            description=' Playful hero from Legend of Zelda that wields a sword.'
            TagName='Hyrulian warrior'
            TagBackground='success'
          />
        </div>

        <div className='card_image'>
          <FirstCard
            picture={Darunia}
            title='Darunia'
            description="Goron leader, dances to awaken fire deity, aids Link's quest."
            TagName='Goron Leader'
            TagBackground='secondary'
          />
        </div>

        <div className='card_image'>
          <FirstCard
            picture={Bluecucco}
            title='Blue cucco'
            description='Small, feathery bird in Zelda, peaceful until provoked.'
            TagName='Special Chicken'
            TagBackground='primary'
          />
        </div>

      </section>
      <footer>
        <Footer text='Enter the Legend of Zelda Character Gallery and choose your hero! Immerse yourself in captivating images of iconic characters from the Zelda universe. Play as Link, Zelda, Ganondorf, and more in interactive adventures. Your journey begins here.' />
      </footer>
    </>
  )
}

export default App

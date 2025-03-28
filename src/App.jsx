import './App.css'
import ThemeProvider from './components/ThemeContext'
import Header from './components/Header'
import { CardTopData, CardBottomData } from './constants'
import CardTop from './components/CardTop'
import CardBottom from './components/CardBottom'

function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        {
          CardTopData.map((cardTop) => (
            <CardTop 
            key={cardTop.image}
            number={cardTop.number}
            social={cardTop.social}
            followers={cardTop.followers}
            image={cardTop.image}
            upSubscribers={cardTop.upSubscribers}
            color={cardTop.color}
            colorUpDown={cardTop.colorUpDown}
            downup={cardTop.downup}
              />
          ))
        }

        <div className='sub-title'>
          <h2>Overview - Today</h2>
        </div>

        {
          CardBottomData.map((cardBottom) => (
            <CardBottom 
            key={cardBottom.followers}
            numHead={cardBottom.numHead}
            followers={cardBottom.followers}
            image={cardBottom.image}
            upSubscribers={cardBottom.upSubscribers}
            colorUpDown={cardBottom.colorUpDown}
            downup={cardBottom.downup}
            />
          ))
        }

      </ThemeProvider>
    </>
  )
}

export default App

import './App.css'
import Header from '../header/Header'
import Title from '../title/Title'
import About from '../about/About'
import TextSection from '../textSection/TextSection'
import CardList from '../cardList/CardList'
import FooterRental from '../footerRental/FooterRental'


function App() {
  return (
    <div className='app'>
        <Header />
        <Title />
        <About/>
        <TextSection />
        <CardList/>
        <FooterRental />
    </div>
  )
}
export default App
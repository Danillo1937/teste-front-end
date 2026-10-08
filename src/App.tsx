import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import NavigationCard from './components/navigationCards/navigationCard'
import PartnerCard from './components/partnerCards/partnerCards'
import Brands from './components/brands/brands'
import Newsletter from './components/newsletter/newsletter'
import Footer from './components/footer/footer'
import './App.css'
import Products from './components/products/Products'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <NavigationCard />
      <Products info={1} />
      <PartnerCard />
      <Products info={2} />
      <PartnerCard />
      <Brands />
      <Products info={2} />
      <Newsletter />
      <Footer />

    </>
  )
}

export default App

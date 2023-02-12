import Hero from "../../component/hero/hero.component";
import HomeHeader from "../../component/home_header/header.component";
import './home-page.css';
const HomePage = () => {
  return (
    <div >
      <div className="hero">
        <HomeHeader />
        <Hero />
      </div>
    </div>
  )
}
export default HomePage;
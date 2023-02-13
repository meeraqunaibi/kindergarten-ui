import LeftContent from '../../component/page-components/about-component/about/left-content.component';
import Feature from '../../component/page-components/feature-component/feature/feature.component';
import Hero from '../../component/page-components/hero-componetnt/hero/hero.component';
import HomeHeader from '../../component/page-components/hero-componetnt/home_header/header.component';
import './home-page.css';
const HomePage = () => {
  return (
    <div >
      <div className="hero">
        <HomeHeader />
        <Hero />
      </div>
      <LeftContent />
      <Feature />
    </div>
  )
}
export default HomePage;
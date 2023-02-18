import LeftContent from '../../component/page-components/about-component/about/left-content.component';
import CallToAction from '../../component/page-components/call to action/adv/adv.component';
import Evaluation from '../../component/page-components/evaluation/evaluation.component';
import Feature from '../../component/page-components/feature-component/feature/feature.component';
import Footer from '../../component/page-components/footer/footer.component';
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
      <CallToAction/>
      <Evaluation/>
      <Footer/>
    </div>
  )
}
export default HomePage;
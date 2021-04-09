import { BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './components/globalStyle';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Banner from './components/Banner/Banner';
import Testimonial from './components/Testimonial/Testimonial';
import Services from './components/Services/Services';
import { TestData } from './components/Testimonial/TestimonialData';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Nav/>
      <Hero/>
      <Banner/>
      <Testimonial data={TestData} />
      <Services/>
      <Booking/>
      <Footer/>
    </Router>
  );
}

export default App;

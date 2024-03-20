import './App.css';
import Header from './components/Header';
import About from './components/About';
// import Footer from './components/Footer';
// import OurGuarantee from './components/OurGuarantee';
import ProgramForWhom from './components/ProgramForWhom';
// import Reviews from './components/Reviews';
import SoftwareCourse from './components/SoftwareCourse';
// import WhoWeAre from './components/WhoWeAre';

function App() {
  return (
    <>
      <div className='bg-[#070808]'>
        <Header />
        <About />
        <SoftwareCourse />
        <ProgramForWhom />
        {/* <Reviews />
        <OurGuarantee />
        <WhoWeAre />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;

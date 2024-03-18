import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import ProgramForWhom from './Components/ProgramForWhom';
import SoftwareCourse from './Components/SoftwareCourse';

function App() {
  return (
    <>
      <div className='bg-[#070808]'>
        <Header />
        <About />
        <SoftwareCourse />
        <ProgramForWhom/>
      </div>
    </>
  );
}

export default App;

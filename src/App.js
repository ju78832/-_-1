
import React from 'react';
import Header from './components/Header.jsx';
import Feature from './components/Feature.jsx';
import About from './components/About.jsx';
import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/download.png';
import Presentation from './components/Presentation.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
   <div className='App'>
    <Header/>
    <Feature/>
    <About image={aboutimage} title='Comes With All Your Need For Daily Life' button = 'Get the app' />
    <Presentation/>
    <About image= {aboutimage1} title='Download And Get The App Now' button= 'Download'/>
    <Contact/>
   </div>
  );
}

export default App;

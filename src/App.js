import './App.css';
import Countdown from "./Countdown/Countdown.js"
import Container from './Container/Container.js';
import Home from "./Sections/Home/Home.js";
import Navbar from "./Navbar/Navbar.js";
import AlertLine from './Sections/AlertLine/AlertLine.js';
import Competition from './Sections/Competition/Competition.js';
import Video from "./Sections/Video/Video.js";
import Showcase from './Sections/Showcase/Showcase.js';
function App() {
  return (
    <div className="App">
      <Countdown/> 
      {/* <AlertLine/>
      <Navbar/>
      <Container>
        <Home/>
        <Video/>
        <Competition/>
        <Showcase/>
      </Container> */}
    </div>
  );
}

export default App;

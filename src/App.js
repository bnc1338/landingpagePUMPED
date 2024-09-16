import './App.css';
import Countdown from "./Countdown/Countdown.js"
import Container from './Container/Container.js';
import Home from "./Sections/Home/Home.js";
import Navbar from "./Navbar/Navbar.js";
import AlertLine from './Sections/AlertLine/AlertLine.js';
import Competition from './Sections/Competition/Competition.js';
import Video from "./Sections/Video/Video.js";
import Showcase from './Sections/Showcase/Showcase.js';
import Download from "./Sections/Download/Download.js";
import BananasBack from "./Sections/BananasBack/BananasBack.js";
import DeleteAccountPage from './DeleteAccountPage';
import PrivacyPolicy from './Sections/PrivacyPolicy/PrivacyPolicy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={
            <Container>
              <Countdown />
              <Home />
            </Container>

            /* 
            <AlertLine />
            <Navbar />
            <Container>
              <Home />
              <Video />
              <Competition />
              <BananasBack>
                <Showcase />
              </BananasBack>
              <Download />
            </Container>
          </Container>} */
          } />
          <Route
            path="/delete-account"
            element={<DeleteAccountPage />} />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />} />
        </Routes>
      </Router>

    </div >
  );
}

export default App;

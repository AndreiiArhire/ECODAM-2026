import './App.css';
import SmoothScroll from "smooth-scroll";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Program } from "./components/program"
import { UsersPresenter } from './components/usersPresenter';
import { Team } from "./components/team";
import { speakers } from "./data/speakers.js"
import { workshop_speakers } from "./data/speakers.js"
import { participants } from "./data/participants.js"
import { Sponsors } from "./components/sponsors";
import { Contact } from "./components/contact";
import { Editions } from "./components/editions";
import { Vision } from "./components/vision";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {

  return (
    <div>
      <Navigation />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ display: "flex", justifyContent: "center" , overflow: "hidden"}}>
        <a
          href="https://www.uaic.ro"
          target="_blank"
          rel="noopener noreferrer"
      >
        <img width={180} src={process.env.PUBLIC_URL + "/img/logos/uaic_logo_en.png"}
          alt="UAIC"></img>
      </a>
        <a
          href="https://www.info.uaic.ro"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "25px" }}
        >
          <img width={100} src={process.env.PUBLIC_URL + "/img/logos/fii_logo_en.png"}
            alt="FII"></img>
        </a>
      </div>
      <Header title={<>
        <div style={{ color: "#28679c", marginTop: "-50px" }}>Doctoral Summer School on</div>
        <div style={{ color: "#28679c" }}>Evolutionary Computing,</div>
        <div style={{ color: "#28679c" }}>Optimisation and Data Mining</div>
        <div style={{ fontSize: "large", fontWeight: "bold", fontStyle: "italic", marginTop: "10px", color: "#28679c"   }}>17–19 June</div>
        <div style={{ fontSize: "large", marginTop: "10px", color: "#28679c"  }}>21 years, 19 editions</div></>} paragraph={" "} />
      <Vision />
      <UsersPresenter id={"speakers"} title={"Invited Speakers"} data={speakers} />
      <UsersPresenter id={"workshop_speakers"} title={"Workshop Speakers"} data={workshop_speakers} />
      <Program />
      <UsersPresenter id={"participants"} title={"Participants"} data={participants} />
      <Sponsors />
      <Team />
      <Editions />
      <Contact />
    </div>
  );
}

export default App;

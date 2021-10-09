import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComputerScience from "./components/technologies/ComputerScience";
import Homepage from "./pages/Homepage";
import Header from "./components/header/Header";
import WebSkills from "./components/Skills/Computer/WebSkills";
import Civil from "./components/technologies/Civil";
import NanoTech from "./components/technologies/NanoTech";
import Mechanical from "./components/technologies/Mechanical";
import Chemical from "./components/technologies/Chemical";
import BioTech from "./components/technologies/BioTech";
import Petroleum from "./components/technologies/Petroleum";
import Ict from "./components/technologies/Ict";
import AutoMobile from "./components/technologies/Automobile";
import ITM from "./components/Skills/Mechanical/IntroToMech";
import DE from "./components/Skills/Mechanical/DE";
import Thermo from "./components/Skills/Mechanical/Thermo";
import AutoCad from "./components/Skills/Civil/AutoCad";
import Constructionestimation from "./components/Skills/Civil/Constructionestimation";
import Environment from "./components/Skills/Civil/Environment";
import EG from "./components/Skills/Mechanical/EG";
import ANSYS from "./components/Skills/Civil/ANSYS";
import DBMS from "./components/Skills/Computer/DBMS";
import OS from "./components/Skills/Computer/OS";
import DS from "./components/Skills/Computer/DS";
import CC from "./components/Skills/Computer/CC";
import MainPage from "./pages/MainPage";
import Genetics from "./components/Skills/BioTech/Genetics";
import Biology from "./components/Skills/BioTech/Biology";
import Health from "./components/Skills/BioTech/Health";
import Genelogy from "./components/Skills/BioTech/Genelogy";
import Oag from "./components/Skills/Chemical/Oag";
import PM from "./components/Skills/Chemical/PM";
import OC from "./components/Skills/Chemical/OC";
import FM from "./components/Skills/Automobile/FM";
import AE from "./components/Skills/Automobile/AE";
import Metal from "./components/Skills/Automobile/Metal";
import Robo from "./components/Skills/Automobile/Robo";
import Ongc from "./components/Skills/Petroleum/Ongc";
import Intro from "./components/Skills/Petroleum/Intro";
import Pipe from "./components/Skills/Petroleum/Pipe";
import WCC from "./components/Skills/ICT/WCC";
import RF from "./components/Skills/ICT/RF";
import AI from "./components/Skills/ICT/AI";
import Dentistry from "./components/Skills/Nanotech/Dentistry";
import NS from "./components/Skills/Nanotech/NS";
import Nano from "./components/Skills/Nanotech/Neno";
import DSA from "./components/Skills/Computer/DSA";

function App() {
  

  return (
    <div className="App">
      <Router>
          <Header />
          <Switch>
            <Route path="/computer" component={ComputerScience} />
            <Route path="/Civil" component={Civil} />
            <Route path="/nano" component={NanoTech} />
            <Route path="/Mechanical" component={Mechanical} />
            <Route path="/Chemical" component={Chemical} />
            <Route path="/biotech" component={BioTech} />
            <Route path="/Petroleum" component={Petroleum} />
            <Route path="/ict" component={Ict} />
            <Route path="/automobile" component={AutoMobile} />
            <Route path="/webdev" component={WebSkills} />
            <Route path="/dbms" component={DBMS} />
            <Route path="/datascience" component={DS} />
            <Route path="/os" component={OS} />
            <Route path="/cc" component={CC} />
            <Route path="/intromechanical" component={ITM} />
            <Route path="/dieselengine" component={DE} />
            <Route path="/thermodynamics" component={Thermo} />
            <Route path="/autocad" component={AutoCad} />
            <Route path="/cons" component={Constructionestimation} />
            <Route path="/evs" component={Environment} />
            <Route path="/enggraphics" component={EG} />
            <Route path="/ansys" component={ANSYS} />
            <Route path="/genetics" component={Genetics} />
            <Route path="/biology" component={Biology} />
            <Route path="/genealogy" component={Genelogy} />
            <Route path="/health" component={Health} />
            <Route path="/ogs" component={Oag} />
            <Route path="/pm" component={PM} />
            <Route path="/och" component={OC} />
            <Route path="/fluidmechanics" component={FM} />
            <Route path="/automotiveengines" component={AE} />
            <Route path="/metallurgy" component={Metal} />
            <Route path="/robotics" component={Robo} />
            <Route path="/ongc" component={Ongc} />
            <Route path="/intro" component={Intro} />
            <Route path="/pipe" component={Pipe} />
            <Route path="/wcc" component={WCC} />
            <Route path="/rf" component={RF} />
            <Route path="/ai" component={AI} />
            <Route path="/dentistry" component={Dentistry} />
            <Route path="/introtonano" component={Nano} />
            <Route path="/nanosensor" component={NS} />
            <Route path="/dsa" component={DSA} />
            <Route exect path="/skills" component={MainPage} />
            <Route exect path="/" component={Homepage} />
          </Switch>
        </Router>

    </div>
        
     
  );
}

export default App;

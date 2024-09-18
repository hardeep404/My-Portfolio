import Navbar from "./Component/Navbar/Navbar";
import Intro from "./Component/Intro/Intro";
import Skill from "./Component/Skills/Skill";
import Works from "./Component/Works/Works"
import Contacts from "./Component/ContactPage/Contacts"
import Footer from "./Component/Footer/Footer"
import "./App.css";

function App() {
  return (
    <div className="edit-port">
      <Navbar />
      <Intro />
      <Skill />
      <Works/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;

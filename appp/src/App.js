import "./App.css";
import { Teachers } from "./Components/Teachers";
import { Students } from "./Components/Students";
import { MoreInfo } from "./Components/MoreInfo";
import { ContactPage } from "./Components/ContactPage";
import { Values } from "./Components/Values";
import { Footer } from "./Components/Footer";
import { TopPage } from "./Components/TopPage";

function App() {
  return (
    <>
      <div className="Top">
        <TopPage />
      </div>
      <div className="Main">
        <Values />
        <Teachers />
        <Students />
        <MoreInfo />
        <ContactPage />
        <Footer />
      </div>
    </>
  );
}
export default App;

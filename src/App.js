import Footer from "./containers/Footer";
import GetStarted from "./containers/GetStarted";
import Header from "./containers/Header";
import MainContainer from "./containers/MainContainer";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <GetStarted />
      <MainContainer />
      {/* <Footer /> */} */}
    </Router>
  );
}

export default App;

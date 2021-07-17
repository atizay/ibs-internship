import {BrowserRouter} from "react-router-dom";
import {Navbar} from "../Navbar/Navbar";
import {Content} from "../Content/Content";

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Content />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

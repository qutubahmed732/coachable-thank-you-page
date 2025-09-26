import {
  Mainpage,
  Thankyoupage
} from "./index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />

          <Route path="/thank-you-page" element={<Thankyoupage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

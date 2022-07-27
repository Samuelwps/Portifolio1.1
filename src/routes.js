import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import { Home } from  "./pages/Home"
import { About } from  "./pages/About"
import { DtMoney } from  "./pages/DtMoney"


const Rout = () => {
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/About" element={<About />} />

        <Route path="/DtMoney" element={<DtMoney />} />
      </Routes>
    </BrowserRouter>
    )
}

export default Rout; 
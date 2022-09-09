import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import { Home } from  "./pages/Home"
import { DtMoney } from  "./pages/DtMoney"
import { WatchMe } from './pages/WatchMe';
import { Cart } from './pages/Cart';


const Rout = () => {
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/DtMoney" element={<DtMoney />} />
        <Route path="/WatchMe" element={<WatchMe />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    )
}

export default Rout; 
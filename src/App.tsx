import SiteLogo from "./assets/Site-logo.webp";
import { Navbar } from "./components";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Bosses } from "./pages/Bosses";

function App() {
  return (
    <div className="h-full text-white">
      <div className="h-full max-w-screen-xl mx-auto px-12">
        <div className="flex flex-col h-full">
          <img src={SiteLogo} className="lg:max-h-40 object-contain" />
          <div className="flex flex-col border border-body border-b-0 flex-1">
            <Navbar />
            <div className="flex flex-col flex-1 bg-main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bosses" element={<Bosses />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

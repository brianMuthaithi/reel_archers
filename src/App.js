import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import Footer from "./Components/Footer/Footer";

const Home = lazy(() => import("./Components/Home/Home"));
const Services = lazy(() => import("./Components/Services/Services"));
const AboutDeep = lazy(() => import("./Components/About/AboutDeep"));
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio"));
const Privacy = lazy(() => import("./Components/Privacy/Privacy"));
const Terms = lazy(() => import("./Components/Terms/Terms"));
const Support = lazy( () => import('./Components/Support/Support'))

function App() {
  return (
    <>
      <Suspense fallback={<div className="text-center">Site Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about Us" element={<AboutDeep />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact us" element={<Support />} />
          <Route path="/privacy policy" element={<Privacy />} />
          <Route path="/terms and services" element={<Terms />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

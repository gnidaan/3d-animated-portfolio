// import Hero from "./components/hero/Hero";
// import Service from "./components/service/Service";
// import Portfolio from "./components/portfolio/Portfolio";
// import Contact from "./components/contact/Contact";


import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";

const Hero = lazy(() => import("./components/hero/Hero"));
const Service = lazy(() => import("./components/service/Service"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <div className="container">
    <Suspense fallback={"loading..."}>
      <LazyLoad height={"100vh"} offset={-100}>
        <section id="home">
          <Hero />
        </section>
      </LazyLoad>
    </Suspense>
    <Suspense fallback={"loading..."}>
      <LazyLoad height={"100vh"} offset={-100}>
        <section id="services">
          <Service />
        </section>{" "}
      </LazyLoad>
    </Suspense>
    <Suspense fallback={"loading..."}>
      <LazyLoad height={"600vh"} offset={-100}>
        {/* <section id="#portfolio"> */}
        <Portfolio />
        {/* </section> */}{" "}
      </LazyLoad>
    </Suspense>
    <Suspense fallback={"loading..."}>
      <LazyLoad height={"100vh"} offset={-100}>
        <section id="contact">
          <Contact />
        </section>{" "}
      </LazyLoad>
    </Suspense>
  </div>
  )
}

export default App
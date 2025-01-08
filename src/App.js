import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import WOW from "wow.js";
import CreativeAgency from "./pages/Home/CreativeAgency";
import PersonalPortfolio from "./pages/Home/PersonalPortfolio";
import DigitalAgency from "./pages/Home/DigitalAgency";
import AboutUs from "./pages/About/AboutUs";
import AboutMe from "./pages/About/AboutMe";
import TeamPage from "./pages/Team/TeamPage";
import TeamPageDetails from "./pages/Team/TeamPageDetails";
import PortfolioDetailsPage from "./pages/PortfolioDetailsPage";
import ServicesDetailsPage from "./pages/ServicesDetailsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/Blog/BlogPage";
import BlogDetailsPage from "./pages/Blog/BlogDetailsPage";
import AnimatedCursor from "react-animated-cursor";

function App() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color="248, 158, 82"
        outerAlpha={0.15}
        innerScale={0}
        outerScale={0}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <Routes basename="/react-template-04">
        <Route path="/react-template-04" element={<CreativeAgency />} />
        <Route path="/react-template-04/home-two" element={<PersonalPortfolio />} />
        <Route path="/react-template-04/home-three" element={<DigitalAgency />} />
        <Route path="/react-template-04/about-us" element={<AboutUs />} />
        <Route path="/react-template-04/about-me" element={<AboutMe />} />
        <Route path="/react-template-04/team" element={<TeamPage />} />
        <Route path="/react-template-04/team-details" element={<TeamPageDetails />} />
        <Route path="/react-template-04/project-details" element={<PortfolioDetailsPage />} />
        <Route path="/react-template-04/services-details" element={<ServicesDetailsPage />} />
        <Route path="/react-template-04/contact" element={<ContactPage />} />
        <Route path="/react-template-04/blog" element={<BlogPage />} />
        <Route path="/react-template-04/blog-details" element={<BlogDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;

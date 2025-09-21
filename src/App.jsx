import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "60px" }}>
        <Hero />
        <Courses />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;




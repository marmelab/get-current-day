import { Footer } from "./components/footer";
import { Testimonials } from "./components/testimonials";
import { BentoSection } from "./sections/BentoSection";
import { Hero } from "./sections/Hero";
import { Pricing } from "./sections/Pricing";
import { Roadmap } from "./sections/Roadmap";
import { Timeline } from "./sections/Timeline";

export const App = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <BentoSection />
          <Pricing />
          <Roadmap />
          <Timeline />
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;

import { Container } from './components/container';
import { Footer } from './components/footer';
import { LogoCloud } from './components/logo-cloud';
import { Testimonials } from './components/testimonials';
import { Hero } from './sections/Hero';

export const App = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <main>
                <Container className="mt-10">
                    <LogoCloud />
                </Container>
                <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
                    {/* <FeatureSection />
                    <BentoSection /> */}
                </div>
            </main>
            <Testimonials />
            <Footer />
        </div>
    );
};

export default App;

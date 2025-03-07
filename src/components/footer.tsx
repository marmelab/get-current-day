import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid';
import { Button } from './button';
import { Container } from './container';
import { Gradient } from './gradient';
import { Subheading } from './text';
import { Link } from './link';

function CallToAction() {
    return (
        <div className="relative pt-20 pb-16 text-center sm:py-24" id="getting-started">
            <hgroup>
                <Subheading>Get started</Subheading>
                <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
                    Ready to dive in?
                    <br />
                    Think Before You Install 🚀
                </p>
            </hgroup>
            <p className="mt-6 text-lg/6 text-gray-950">
                Our <strong>troll package</strong> does something absurd: it
                returns the current day, updates daily, and includes unnecessary
                features—yet people still download it. This highlights a real
                issue:{' '}
                <strong>
                    developers often install dependencies without questioning
                    their necessity
                </strong>
            </p>
            <p className="mt-6 text-lg/6 text-gray-950">
                Every package you add increases software bloat, slows down
                applications, and contributes to carbon emissions. As
                developers, we have a duty to write efficient, sustainable code.
                ⚡ <strong>Be mindful. Reduce waste.</strong> Before installing
                a package, ask yourself: Do I really need this?
            </p>
            <p className="mt-6 text-lg/6 text-gray-950">
                🧯🚒 <strong>Take action!</strong> Want to measure and reduce
                the carbon footprint of your applications? <br />
                Check out{' '}
                <strong>
                    GreenFrame, an open-source tool that helps you analyze the
                    environmental impact of your code.
                </strong>
            </p>
            <p className="mt-6 text-lg/6 text-gray-950">
                Let's build smarter, greener, and more responsible software.
                🌍💚
            </p>

            <div className="mt-6">
                <Button
                    className="w-full sm:w-auto"
                    href="https://github.com/marmelab/greenframe"
                    target="_blank"
                >
                    Get GreenFrame
                </Button>
            </div>
            <p className="text-gray-500 mt-6 italic">
                This website and package are heavily inspired by Shayan and his
                site{' '}
                <a
                    href="https://getfullyear.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://getfullyear.com/
                </a>
                .
            </p>
            <p className="text-gray-500 italic">
                This package is ephemeral for April Fools' Day and will be
                removed at some point.
            </p>
        </div>
    );
}

function Sitemap() {
    return (
        <>
            <div>
                <Link
                    className="bg-linear-to-r from-orange-500 from-28% via-red-400 via-70% to-pink-600 bg-clip-text text-transparent"
                    target="_blank"
                    href="https://github.com/arimet"
                >
                    Anthony Rimet
                </Link>
            </div>
            <div>
                <Link
                    className="bg-linear-to-r from-orange-500 from-28% via-red-400 via-70% to-pink-600 bg-clip-text text-transparent"
                    target="_blank"
                    href="https://github.com/JulienMattiussi"
                >
                    Julien Mattuissi
                </Link>
            </div>
            <div>
                <Link
                    className="bg-linear-to-r from-orange-500 from-28% via-red-400 via-70% to-pink-600 bg-clip-text text-transparent"
                    target="_blank"
                    href="https://marmelab.com/en/"
                >
                    Marmelab
                </Link>
            </div>
            <div>
                <Link
                    className="bg-linear-to-r from-orange-500 from-28% via-red-400 via-70% to-pink-600 bg-clip-text text-transparent"
                    target="_blank"
                    href="https://github.com/marmelab/greenframe"
                >
                    GreenFrame
                </Link>
            </div>
        </>
    );
}

function Copyright() {
    return (
        <div className="text-sm/6 text-gray-950">
            &copy; {new Date().getFullYear()} get-current-day.
        </div>
    );
}

export function Footer() {
    return (
        <footer>
            <Gradient className="relative">
                <div className="absolute inset-2 rounded-4xl bg-white/80" />
                <Container>
                    <CallToAction />
                    <PlusGrid className="pb-16">
                        <PlusGridRow>
                            <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                                <div className="col-span-2 flex">
                                    <PlusGridItem className="pt-6 lg:pb-6">
                                        <Copyright />
                                    </PlusGridItem>
                                </div>
                                <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                                    <Sitemap />
                                </div>
                            </div>
                        </PlusGridRow>
                    </PlusGrid>
                </Container>
            </Gradient>
        </footer>
    );
}

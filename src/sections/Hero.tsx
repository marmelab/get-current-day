import { Button } from '../components/button';
import { Container } from '../components/container';
import { Gradient } from '../components/gradient';
import { Link } from '../components/link';
import { Navbar } from '../components/navbar';
import { ChevronRightIcon } from '@heroicons/react/16/solid';

export const Hero = () => {
    return (
        <div className="relative">
            <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
            <Container className="relative">
                <Navbar
                    banner={
                        <Link
                            href="https://www.npmjs.com/package/get-current-day"
                            target="_blank"
                            className="flex items-center gap-1 rounded-full bg-pink-600/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-pink-600/30"
                        >
                            🚀 Check out our daily updated NPM package:
                            get-current-day
                            <ChevronRightIcon className="size-4" />
                        </Link>
                    }
                />
                <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
                    <div className="w-max">
                        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-4xl/[1.1] text-balance text-gray-950 sm:text-8xl/[1.1] md:text-9xl/[1.1]">
                            Easy today's date.
                        </h1>
                    </div>
                    <p className="mt-8 max-w-2xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
                        Every JavaScript developer has struggled at least once
                        to get the current date. get-current-day simplifies your
                        workflow, providing today's date instantly and
                        effortlessly. ✨
                    </p>
                    <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                        <Button
                            href="https://www.npmjs.com/package/get-current-day"
                            target="_blank"
                        >
                            Get started 🚀
                        </Button>
                        <Button
                            variant="secondary"
                            href="https://github.com/marmelab/get-current-day"
                            target="_blank"
                        >
                            View on GitHub ⭐
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

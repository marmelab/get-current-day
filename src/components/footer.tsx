import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid';
import { Button } from './button';
import { Container } from './container';
import { Gradient } from './gradient';
import { Subheading } from './text';

function CallToAction() {
    return (
        <div className="relative pt-20 pb-16 text-center sm:py-24">
            <hgroup>
                <Subheading>Get started</Subheading>
                <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
                    Ready to dive in?
                    <br />
                    Install our package today.
                </p>
            </hgroup>
            <div className="mt-6">
                <Button className="w-full sm:w-auto" href="#">
                    Get started
                </Button>
            </div>
        </div>
    );
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
    );
}

function Sitemap() {
    return (
        <>
            <div>
                <SitemapHeading>Anthony</SitemapHeading>
            </div>
            <div>
                <SitemapHeading>Julio</SitemapHeading>
            </div>
            <div>
                <SitemapHeading>Marmelab</SitemapHeading>
            </div>
            <div>
                <SitemapHeading>GreenFrame</SitemapHeading>
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                            />
                                        </svg>
                                    </PlusGridItem>
                                </div>
                                <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                                    <Sitemap />
                                </div>
                            </div>
                        </PlusGridRow>
                        <PlusGridRow className="flex justify-between">
                            <div>
                                <PlusGridItem className="py-3">
                                    <Copyright />
                                </PlusGridItem>
                            </div>
                        </PlusGridRow>
                    </PlusGrid>
                </Container>
            </Gradient>
        </footer>
    );
}

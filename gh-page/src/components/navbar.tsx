'use client';

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { Link } from './link';
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid';

const links = [
    { href: '/getting-started', label: 'Getting Started' },
    { href: '/pricing', label: 'Pricing' },
];

function DesktopNav() {
    return (
        <nav className="relative hidden lg:flex">
            {links.map(({ href, label }) => (
                <PlusGridItem key={href} className="relative flex">
                    <Link
                        href={href}
                        className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%]"
                    >
                        {label}
                    </Link>
                </PlusGridItem>
            ))}
        </nav>
    );
}

function MobileNavButton() {
    return (
        <DisclosureButton
            className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
            aria-label="Open main menu"
        >
            <Bars2Icon className="size-6" />
        </DisclosureButton>
    );
}

function MobileNav() {
    return (
        <DisclosurePanel className="lg:hidden">
            <div className="flex flex-col gap-6 py-4">
                {links.map(({ href, label }, linkIndex) => (
                    <motion.div
                        initial={{ opacity: 0, rotateX: -90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        transition={{
                            duration: 0.15,
                            ease: 'easeInOut',
                            rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
                        }}
                        key={href}
                    >
                        <Link
                            href={href}
                            className="text-base font-medium text-gray-950"
                        >
                            {label}
                        </Link>
                    </motion.div>
                ))}
            </div>
            <div className="absolute left-1/2 w-screen -translate-x-1/2">
                <div className="absolute inset-x-0 top-0 border-t border-black/5" />
                <div className="absolute inset-x-0 top-2 border-t border-black/5" />
            </div>
        </DisclosurePanel>
    );
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
    return (
        <Disclosure as="header" className="pt-12 sm:pt-16">
            <PlusGrid>
                <PlusGridRow className="relative flex justify-between">
                    <div className="relative flex gap-6">
                        <PlusGridItem className="py-3">
                            <Link href="/" title="Home">
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
                                <span className="sr-only">Home</span>
                            </Link>
                        </PlusGridItem>
                        {banner && (
                            <div className="relative hidden items-center py-3 lg:flex">
                                {banner}
                            </div>
                        )}
                    </div>
                    <DesktopNav />
                    <MobileNavButton />
                </PlusGridRow>
            </PlusGrid>
            <MobileNav />
        </Disclosure>
    );
}

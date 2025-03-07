'use client';

import * as Headless from '@headlessui/react';
import { ArrowLongRightIcon } from '@heroicons/react/20/solid';
import { clsx } from 'clsx';
import {
    MotionValue,
    motion,
    useMotionValueEvent,
    useScroll,
    useSpring,
    type HTMLMotionProps,
} from 'framer-motion';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import useMeasure, { type RectReadOnly } from 'react-use-measure';
import { Container } from './container';
import { Link } from './link';
import { Heading, Subheading } from './text';

const testimonials = [
    {
        img: './testimonials/marty.webp',
        name: 'Marty McFly',
        title: 'Time Traveler',
        quote: 'Thanks to get-current-day, I always know what day it is, even when I’m lost in time.',
    },
    {
        img: './testimonials/hermione.webp',
        name: 'Hermione Granger',
        title: 'Time Turner User',
        quote: 'With get-current-day, I can manage my time-turner schedule effortlessly.',
    },
    {
        img: './testimonials/phil.webp',
        name: 'Phil Connors',
        title: 'Groundhog Day Expert',
        quote: 'Every day feels new with get-current-day. It’s a game-changer!',
    },
    {
        img: './testimonials/doctor.webp',
        name: 'The Doctor',
        title: 'Time Lord',
        quote: 'Even a Time Lord needs to know the current day. get-current-day is fantastic!',
    },
    {
        img: './testimonials/doc.webp',
        name: 'Doc Brown',
        title: 'Inventor',
        quote: 'Great Scott! get-current-day is the best tool for keeping track of time.',
    },
    {
        img: './testimonials/sam.webp',
        name: 'Sam Beckett',
        title: 'Quantum Leaper',
        quote: 'Leaping through time is easier with get-current-day. Highly recommended!',
    },
];

function TestimonialCard({
    name,
    title,
    img,
    children,
    bounds,
    scrollX,
    ...props
}: {
    img: string;
    name: string;
    title: string;
    children: React.ReactNode;
    bounds: RectReadOnly;
    scrollX: MotionValue<number>;
} & HTMLMotionProps<'div'>) {
    const ref = useRef<HTMLDivElement | null>(null);

    const computeOpacity = useCallback(() => {
        const element = ref.current;
        if (!element || bounds.width === 0) return 1;

        const rect = element.getBoundingClientRect();

        if (rect.left < bounds.left) {
            const diff = bounds.left - rect.left;
            const percent = diff / rect.width;
            return Math.max(0.5, 1 - percent);
        } else if (rect.right > bounds.right) {
            const diff = rect.right - bounds.right;
            const percent = diff / rect.width;
            return Math.max(0.5, 1 - percent);
        } else {
            return 1;
        }
    }, [ref, bounds.width, bounds.left, bounds.right]);

    const opacity = useSpring(computeOpacity(), {
        stiffness: 154,
        damping: 23,
    });

    useLayoutEffect(() => {
        opacity.set(computeOpacity());
    }, [computeOpacity, opacity]);

    useMotionValueEvent(scrollX, 'change', () => {
        opacity.set(computeOpacity());
    });

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            {...props}
            className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
        >
            <img
                alt=""
                src={img}
                loading="lazy"
                width={394}
                height={512}
                className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
            />
            <figure className="relative p-10">
                <blockquote>
                    <p className="relative text-xl/7 text-white">
                        <span
                            aria-hidden="true"
                            className="absolute -translate-x-full"
                        >
                            “
                        </span>
                        {children}
                        <span aria-hidden="true" className="absolute">
                            ”
                        </span>
                    </p>
                </blockquote>
                <figcaption className="mt-6 border-t border-white/20 pt-6">
                    <p className="text-sm/6 font-medium text-white">{name}</p>
                    <p className="text-sm/6 font-medium">
                        <span className="bg-linear-to-r from-orange-200 from-28% via-red-400 via-70% to-pink-600 bg-clip-text text-transparent">
                            {title}
                        </span>
                    </p>
                </figcaption>
            </figure>
        </motion.div>
    );
}

function CallToAction() {
    return (
        <div>
            <p className="max-w-lg text-sm/6 text-gray-600">
                Join the fun and start using get-current-day to always know what
                day it is.
            </p>
            <div className="mt-2">
                <Link
                    href="https://www.npmjs.com/package/get-current-day"
                    target='_blank'
                    className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600"
                >
                    Get started
                    <ArrowLongRightIcon className="size-5" />
                </Link>
            </div>
        </div>
    );
}

export function Testimonials() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const { scrollX } = useScroll({ container: scrollRef });
    const [setReferenceWindowRef, bounds] = useMeasure();
    const [activeIndex, setActiveIndex] = useState(0);

    useMotionValueEvent(scrollX, 'change', (x) => {
        setActiveIndex(
            Math.floor(x / scrollRef.current!.children[0].clientWidth),
        );
    });

    function scrollTo(index: number) {
        const gap = 32;
        const width = (scrollRef.current!.children[0] as HTMLElement)
            .offsetWidth;
        scrollRef.current!.scrollTo({ left: (width + gap) * index });
    }

    return (
        <div className="overflow-hidden py-32">
            <Container>
                <div ref={setReferenceWindowRef}>
                    <Subheading>What everyone is saying</Subheading>
                    <Heading as="h3" className="mt-2">
                        Trusted by professionals.
                    </Heading>
                </div>
            </Container>
            <div
                ref={scrollRef}
                className={clsx([
                    'mt-16 flex gap-8 px-[var(--scroll-padding)]',
                    '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                    'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
                    '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
                ])}
            >
                {testimonials.map(
                    ({ img, name, title, quote }, testimonialIndex) => (
                        <TestimonialCard
                            key={testimonialIndex}
                            name={name}
                            title={title}
                            img={img}
                            bounds={bounds}
                            scrollX={scrollX}
                            onClick={() => scrollTo(testimonialIndex)}
                        >
                            {quote}
                        </TestimonialCard>
                    ),
                )}
                <div className="w-[42rem] shrink-0 sm:w-[54rem]" />
            </div>
            <Container className="mt-16">
                <div className="flex justify-between">
                    <CallToAction />
                    <div className="hidden sm:flex sm:gap-2">
                        {testimonials.map(({ name }, testimonialIndex) => (
                            <Headless.Button
                                key={testimonialIndex}
                                onClick={() => scrollTo(testimonialIndex)}
                                data-active={
                                    activeIndex === testimonialIndex
                                        ? true
                                        : undefined
                                }
                                aria-label={`Scroll to testimonial from ${name}`}
                                className={clsx(
                                    'size-4.5 rounded-full border border-transparent bg-gray-300 transition',
                                    'data-active:bg-gray-400 data-hover:bg-gray-400',
                                    'forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4',
                                )}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

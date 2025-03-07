import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
    {
        name: 'Free',
        id: 'tier-free',
        href: '#',
        priceMonthly: '$0',
        description:
            'Perfect for getting started with our completely useless package.',
        features: ["Returns today's date", 'Daily updates', 'Basic support'],
        featured: false,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$99',
        description:
            'For those who need the absolute best in date-returning technology.',
        features: [
            "Returns today's date",
            'Daily updates',
            'Priority support',
            'Custom date formats',
            'Dedicated account manager',
            'Exclusive access to beta features',
        ],
        featured: true,
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export const Pricing = () => {
    return (
        <div className="relative isolate py-12">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-orange-400 to-pink-600 opacity-30"
                />
            </div>
            <div className="mx-auto max-w-4xl text-center" id="pricing">
                <h2 className="text-base/7 font-semibold text-pink-600">
                    Pricing
                </h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                    Choose the right plan for you
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
                Choose an affordable plan that’s packed with the best features
                for getting today's date, every single day.
            </p>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier, tierIdx) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured
                                ? 'relative bg-gray-900 shadow-2xl'
                                : 'bg-white/60 sm:mx-8 lg:mx-0',
                            tier.featured
                                ? ''
                                : tierIdx === 0
                                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                                : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                            'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
                        )}
                    >
                        <h3
                            id={tier.id}
                            className={classNames(
                                tier.featured
                                    ? 'text-pink-400'
                                    : 'text-pink-600',
                                'text-base/7 font-semibold',
                            )}
                        >
                            {tier.name}
                        </h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span
                                className={classNames(
                                    tier.featured
                                        ? 'text-white'
                                        : 'text-gray-900',
                                    'text-5xl font-semibold tracking-tight',
                                )}
                            >
                                {tier.priceMonthly}
                            </span>
                            <span
                                className={classNames(
                                    tier.featured
                                        ? 'text-gray-400'
                                        : 'text-gray-500',
                                    'text-base',
                                )}
                            >
                                /month
                            </span>
                        </p>
                        <p
                            className={classNames(
                                tier.featured
                                    ? 'text-gray-300'
                                    : 'text-gray-600',
                                'mt-6 text-base/7',
                            )}
                        >
                            {tier.description}
                        </p>
                        <ul
                            role="list"
                            className={classNames(
                                tier.featured
                                    ? 'text-gray-300'
                                    : 'text-gray-600',
                                'mt-8 space-y-3 text-sm/6 sm:mt-10',
                            )}
                        >
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon
                                        aria-hidden="true"
                                        className={classNames(
                                            tier.featured
                                                ? 'text-pink-400'
                                                : 'text-pink-600',
                                            'h-6 w-5 flex-none',
                                        )}
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="https://www.npmjs.com/package/get-current-day"
                            target="_blank"
                            aria-describedby={tier.id}
                            className={classNames(
                                tier.featured
                                    ? 'bg-pink-700 text-white shadow-xs hover:bg-pink-400 focus-visible:outline-pink-500'
                                    : 'text-pink-600 ring-1 ring-pink-200 ring-inset hover:ring-pink-300 focus-visible:outline-pink-600',
                                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                            )}
                        >
                            Get started today
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

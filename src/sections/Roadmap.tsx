import { CheckIcon } from '@heroicons/react/20/solid';

const steps = [
    {
        name: 'Initial Release',
        description: "Launch the package that returns today's date.",
        status: 'complete',
    },
    {
        name: 'Daily Updates',
        description:
            'Ensure the package updates every day with the current date.',
        status: 'complete',
    },
    {
        name: 'Add Leap Year Support',
        description: 'Handle February 29th correctly every four years.',
        status: 'current',
    },
    {
        name: 'Time Travel Feature',
        description: 'Allow users to get the date from any day in history.',
        status: 'upcoming',
    },
    {
        name: 'Predict Future Dates',
        description: 'Implement AI to predict future dates accurately.',
        status: 'upcoming',
    },
    {
        name: 'Interplanetary Dates',
        description: 'Support dates on Mars and other planets.',
        status: 'upcoming',
    },
    {
        name: 'Quantum Date Entanglement',
        description:
            'Use quantum computing to entangle dates across parallel universes.',
        status: 'upcoming',
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export const Roadmap = () => {
    return (
        <div className="overflow-hidden py-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 md:px-0 lg:pt-4 lg:pr-4">
                        <div className="border-b border-gray-200 pb-5 mb-5">
                            <h2 className="text-base/7 font-semibold text-pink-600">
                                Roadmap
                            </h2>
                            <p className="mt-2 max-w-4xl text-sm text-gray-500">
                                A truly memorable project deserves to be
                                unforgettable. That's why we're gearing up to
                                launch a range of exciting new features soon.
                                Stay tuned!
                            </p>
                        </div>
                        <ol role="list" className="overflow-hidden">
                            {steps.map((step, stepIdx) => (
                                <li
                                    key={step.name}
                                    className={classNames(
                                        stepIdx !== steps.length - 1
                                            ? 'pb-10'
                                            : '',
                                        'relative',
                                    )}
                                >
                                    {step.status === 'complete' ? (
                                        <>
                                            {stepIdx !== steps.length - 1 ? (
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-pink-600"
                                                />
                                            ) : null}
                                            <div className="group relative flex items-start">
                                                <span className="flex h-9 items-center">
                                                    <span className="relative z-10 flex size-8 items-center justify-center rounded-full bg-pink-600">
                                                        <CheckIcon
                                                            aria-hidden="true"
                                                            className="size-5 text-white"
                                                        />
                                                    </span>
                                                </span>
                                                <span className="ml-4 flex min-w-0 flex-col">
                                                    <span className="text-sm font-medium">
                                                        {step.name}
                                                    </span>
                                                    <span className="text-sm text-gray-500">
                                                        {step.description}
                                                    </span>
                                                </span>
                                            </div>
                                        </>
                                    ) : step.status === 'current' ? (
                                        <>
                                            {stepIdx !== steps.length - 1 ? (
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-gray-300"
                                                />
                                            ) : null}
                                            <div
                                                aria-current="step"
                                                className="group relative flex items-start"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="flex h-9 items-center"
                                                >
                                                    <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-pink-600 bg-white">
                                                        <span className="size-2.5 rounded-full bg-pink-600" />
                                                    </span>
                                                </span>
                                                <span className="ml-4 flex min-w-0 flex-col">
                                                    <span className="text-sm font-medium text-pink-600">
                                                        {step.name}
                                                    </span>
                                                    <span className="text-sm text-gray-500">
                                                        {step.description}
                                                    </span>
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {stepIdx !== steps.length - 1 ? (
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 bg-gray-300"
                                                />
                                            ) : null}
                                            <div className="group relative flex items-start">
                                                <span
                                                    aria-hidden="true"
                                                    className="flex h-9 items-center"
                                                >
                                                    <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white ">
                                                        <span className="size-2.5 rounded-full bg-transparent " />
                                                    </span>
                                                </span>
                                                <span className="ml-4 flex min-w-0 flex-col">
                                                    <span className="text-sm font-medium text-gray-500">
                                                        {step.name}
                                                    </span>
                                                    <span className="text-sm text-gray-500">
                                                        {step.description}
                                                    </span>
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

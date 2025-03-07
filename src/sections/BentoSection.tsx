import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid';

const features = [
    {
        name: 'Easy to install.',
        description:
            'Install the package effortlessly with a single command and start using it right away.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Lightweight and secure.',
        description:
            "The package is lightweight, ensuring minimal impact on your application's performance, and is built with security in mind.",
        icon: LockClosedIcon,
    },
    {
        name: 'Daily updates.',
        description:
            'Receive daily updates to keep your application in sync with the latest day of the week.',
        icon: ServerIcon,
    },
];

export const BentoSection = () => {
    return (
        <div className="overflow-hidden py-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 md:px-0 lg:pt-4 lg:pr-4">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-pink-600">
                                Develop faster
                            </h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                A better workflow
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                The{' '}
                                <span className="bg-linear-to-r from-orange-500 from-28% via-red-400 via-70% to-pink-600 bg-clip-text text-transparent">
                                    get-current-day
                                </span>{' '}
                                package provides a simple utility to get the
                                current day of the week, making it easier to
                                manage date-related functionalities in your
                                applications.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="relative pl-9"
                                    >
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon
                                                className="absolute top-1 left-1 size-5 text-pink-600"
                                                aria-hidden="true"
                                            />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="sm:px-6 lg:px-0">
                        <div className="relative isolate overflow-hidden bg-pink-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
                            <div
                                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-pink-100 opacity-20 ring-1 ring-white ring-inset"
                                aria-hidden="true"
                            />
                            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                            <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                                App.jsx
                                            </div>
                                            <div className="border-r border-gray-600/10 px-4 py-2">
                                                Other.jsx
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 pt-6 pb-14">
                                        <pre className="text-sm/6 text-white">
                                            <code>
                                                <span className="text-blue-400">
                                                    // npm install get-current-day;
                                                </span>
                                                <br />
                                                <br />
                                                <span className="text-blue-400">
                                                    import
                                                </span>{' '}
                                                <span className="text-green-400">
                                                    today
                                                </span>{' '}
                                                <span className="text-blue-400">
                                                    from
                                                </span>{' '}
                                                <span className="text-yellow-400">
                                                    'get-current-day'
                                                </span>
                                                ;
                                                <br />
                                                <br />
                                                <span className="text-blue-400">
                                                    const
                                                </span>{' '}
                                                <span className="text-green-400">
                                                    today
                                                </span>{' '}
                                                <span className="text-blue-400">
                                                    =
                                                </span>{' '}
                                                <span className="text-green-400">
                                                    today
                                                </span>
                                                ();
                                                <br />
                                                <span className="text-green-400">
                                                    console
                                                </span>
                                                .
                                                <span className="text-blue-400">
                                                    log
                                                </span>
                                                (
                                                <span className="text-yellow-400">
                                                    'Today is:{' '}
                                                    {new Date()
                                                        .toISOString()
                                                        .slice(0, 10)}
                                                    '
                                                </span>
                                                );
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const timeline = [
    {
        name: 'Initial Release',
        description:
            'The first version of our package was released, providing basic functionality to get the current date.',
        date: 'March 2025',
    },
    {
        name: 'Major nothing update',
        description:
            'We were too lazy to add any new features, so we just updated the version number.',
        date: 'March 2025',
    },
    {
        name: 'Security Patch',
        description:
            'A critical security patch was applied to fix vulnerabilities that could potentially expose user data. Please update all your passwords.',
        date: 'March 2025',
    },
    {
        name: 'API Outage',
        description:
            'An unexpected outage occurred, causing the API to be unavailable for several hours. We fix that by asking to ChatGPT.',
        date: 'April 2025',
    },
];

export const Timeline = () => {
    return (
        <div className="relative isolate pt-12">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-pink-600">
                    Timeline
                </h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                    Not everything went as planned
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
                We believe in keeping it crystal clear—no secrets, no surprises,
                just pure transparency with our customers! 😊✨
            </p>
            <div className="mx-auto max-w-7xl py-12">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {timeline.map((item) => (
                        <div key={item.name}>
                            <time className="flex items-center text-sm/6 font-semibold text-orange-500">
                                <svg
                                    viewBox="0 0 4 4"
                                    aria-hidden="true"
                                    className="mr-4 size-1 flex-none"
                                >
                                    <circle
                                        r={2}
                                        cx={2}
                                        cy={2}
                                        fill="currentColor"
                                    />
                                </svg>
                                {item.date}
                                <div
                                    aria-hidden="true"
                                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                />
                            </time>
                            <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                                {item.name}
                            </p>
                            <p className="mt-1 text-base/7 text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

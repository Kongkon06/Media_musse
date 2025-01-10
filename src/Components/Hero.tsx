// Hero.js

export function Hero() {
    return <section className="w-full px-6 py-8">
            <div className="grid grid-cols-5 gap-4">
                {/* Main Hero (3/5) */}
                <div className="col-span-3 h-[60vh] bg-blue-500 text-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold mb-4">Main Hero</h1>
                    <p className="text-lg">This is the main hero section that takes up 3/5 of the width.</p>
                </div>

                {/* Sub Heroes (2/5) */}
                <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Sub Hero 1</h2>
                        <p>This is sub hero 1.</p>
                    </div>
                    <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Sub Hero 2</h2>
                        <p>This is sub hero 2.</p>
                    </div>
                    <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Sub Hero 3</h2>
                        <p>This is sub hero 3.</p>
                    </div>
                    <div className="bg-purple-500 text-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Sub Hero 4</h2>
                        <p>This is sub hero 4.</p>
                    </div>
                </div>
            </div>
        </section>;
}
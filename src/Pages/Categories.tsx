export function Categories(){
    return <div className="container mx-auto p-8">
    <h1 className="text-3xl font-bold mb-8">Categories</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Instruments</h2>
            <ul className="list-disc list-inside ml-4">
                <li>Guitars (Electric, Acoustic, Bass)</li>
                <li>Drums & Percussion</li>
                <li>Keyboards & Pianos</li>
                <li>Wind Instruments (Flute, Saxophone, Trumpet, etc.)</li>
                <li>String Instruments (Violins, Cellos, etc.)</li>
                <li>DJ Equipment</li>
            </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Audio Equipment</h2>
            <ul className="list-disc list-inside ml-4">
                <li>Headphones</li>
                <li>Microphones</li>
                <li>Speakers & Amplifiers</li>
                <li>Audio Interfaces</li>
                <li>Studio Monitors</li>
                <li>Audio Cables</li>
            </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Sheet Music & Books</h2>
            <ul className="list-disc list-inside ml-4">
                <li>Music Sheets (for different instruments)</li>
                <li>Music Theory Books</li>
                <li>Music Education (method books)</li>
            </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Accessories</h2>
            <ul className="list-disc list-inside ml-4">
                <li>Guitar Picks</li>
                <li>Stands & Mounts</li>
                <li>Tuners & Metronomes</li>
                <li>Cases & Bags</li>
                <li>Cables & Connectors</li>
                <li>Straps</li>
            </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Sound & Production Software</h2>
            <ul className="list-disc list-inside ml-4">
                <li>Digital Audio Workstations (DAWs)</li>
                <li>VST Plugins & Effects</li>
                <li>Loop Libraries</li>
                <li>Recording Software</li>
            </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Music Apparel & Merchandise</h2>
            <ul className="list-disc list-inside ml-4">
                <li>Band T-shirts & Hoodies</li>
                <li>Posters & Art Prints</li>
                <li>Music-themed Accessories</li>
            </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Deals & Bundles</h2>
            <ul className="list-disc list-inside ml-4">
                <li>Discounted Items</li>
                <li>Music Gear Bundles</li>
                <li>Seasonal Sales</li>
            </ul>
        </div>
    </div>
</div>
}
import Navbar from "../components/Navbar";

export default function Tests() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8 mt-10 py-8 font-sans">
        <h1 className="text-xl font-bold mb-6">Tests</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mock Tests Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Mock Tests</h2>
            <p className="text-gray-700">Prepare with our curated mock tests to practice exam scenarios.</p>
            {/* Example of a test card */}
            <div className="mt-4">
              <h3 className="font-semibold">Mock Test 1</h3>
              <p className="text-gray-600">Duration: 2 hours</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Start Test</button>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Mock Test 2</h3>
              <p className="text-gray-600">Duration: 1.5 hours</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Start Test</button>
            </div>
          </div>

          {/* PYQs Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Previous Year Question Papers (PYQs)</h2>
            <p className="text-gray-700">Review past exam papers to better understand the pattern and difficulty level.</p>
            {/* Example of a PYQ card */}
            <div className="mt-4">
              <h3 className="font-semibold">PYQ 2021</h3>
              <p className="text-gray-600">Subject: </p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">View Paper</button>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">PYQ 2020</h3>
              <p className="text-gray-600">Subject: </p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">View Paper</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

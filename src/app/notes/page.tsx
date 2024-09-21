import Navbar from "../components/Navbar";

export default function Notes() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8 mt-10 py-8 font-sans">
        <h1 className="text-xl font-bold mb-6">Notes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Lecture Notes Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Lecture Notes</h2>
            <p className="text-gray-700">Download detailed lecture notes for each topic.</p>
            {/* Example of a Lecture Note card */}
            <div className="mt-4">
              <h3 className="font-semibold">Algebra: Lecture 1 Notes</h3>
              <p className="text-gray-600">Topic: Introduction to Algebra</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Download</button>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Calculus: Lecture 2 Notes</h3>
              <p className="text-gray-600">Topic: Basics of Calculus</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Download</button>
            </div>
          </div>

          {/* Revision Notes Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Revision Notes</h2>
            <p className="text-gray-700">Access concise notes for quick revision before exams.</p>
            {/* Example of a Revision Note card */}
            <div className="mt-4">
              <h3 className="font-semibold">Algebra: Quick Revision</h3>
              <p className="text-gray-600">Key formulas and concepts</p>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Download</button>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Trigonometry: Quick Revision</h3>
              <p className="text-gray-600">Essential concepts and tricks</p>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Download</button>
            </div>
          </div>

          {/* Additional Resources Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Additional Resources</h2>
            <p className="text-gray-700">Extra notes, cheat sheets, and guides for further study.</p>
            <div className="mt-4">
              <h3 className="font-semibold">Math Cheat Sheet</h3>
              <p className="text-gray-600">Important formulas and shortcuts</p>
              <button className="mt-2 px-4 py-2 bg-purple-500 text-white rounded">Download</button>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Physics Summary</h3>
              <p className="text-gray-600">Brief summaries of key topics</p>
              <button className="mt-2 px-4 py-2 bg-purple-500 text-white rounded">Download</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

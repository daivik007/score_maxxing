import Navbar from "../components/Navbar";

export default function Lectures() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8 mt-10 py-8 font-sans">
        <h1 className="text-xl font-bold mb-6">Lectures</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Recorded Lectures Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Recorded Lectures</h2>
            <p className="text-gray-700">Access pre-recorded lectures anytime and anywhere.</p>
            {/* Example of a Recorded Lecture Card */}
            <div className="mt-4">
              <h3 className="font-semibold">Lecture 1: Introduction to Algebra</h3>
              <p className="text-gray-600">Duration: 45 minutes</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Watch Now</button>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Lecture 2: Basics of Calculus</h3>
              <p className="text-gray-600">Duration: 1 hour</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Watch Now</button>
            </div>
          </div>

          {/* Live Lectures Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Live Lectures</h2>
            <p className="text-gray-700">Join scheduled live sessions and interact with instructors in real time.</p>
            {/* Example of a Live Lecture Card */}
            <div className="mt-4">
              <h3 className="font-semibold">Live Lecture: Advanced Trigonometry</h3>
              <p className="text-gray-600">Date: September 25, 2024 | Time: 3:00 PM</p>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Join Now</button>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Live Lecture: Differential Equations</h3>
              <p className="text-gray-600">Date: September 28, 2024 | Time: 5:00 PM</p>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Join Now</button>
            </div>
          </div>

          {/* Additional Resources Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Additional Resources</h2>
            <p className="text-gray-700">Explore additional materials to complement your learning.</p>
            <div className="mt-4">
              <h3 className="font-semibold">Lecture Slides</h3>
              <p className="text-gray-600">Download slides from the latest lectures.</p>
              <button className="mt-2 px-4 py-2 bg-purple-500 text-white rounded">Download</button>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Supplementary Videos</h3>
              <p className="text-gray-600">Watch additional topic-related videos.</p>
              <button className="mt-2 px-4 py-2 bg-purple-500 text-white rounded">Watch Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Navbar from "../components/Navbar";

export default function Courses() {
	return (
		<>
			<Navbar />
			<div className="container mx-auto px-8 mt-10 py-8 font-sans">
				<h1 className="text-xl font-bold mb-6">Courses</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="bg-white shadow-md rounded-lg p-6">
						<h2 className="text-xl font-semibold mb-2">Course 1</h2>
						<p className="text-gray-700 mb-4">Description of course 1.</p>
						<button className="bg-blue-500 text-white px-4 py-2 rounded">Join Now</button>
					</div>
					<div className="bg-white shadow-md rounded-lg p-6">
						<h2 className="text-xl font-semibold mb-2">Course 2</h2>
						<p className="text-gray-700 mb-4">Description of course 2.</p>
						<button className="bg-blue-500 text-white px-4 py-2 rounded">Join Now</button>
					</div>
					<div className="bg-white shadow-md rounded-lg p-6">
						<h2 className="text-xl font-semibold mb-2">Course 3</h2>
						<p className="text-gray-700 mb-4">Description of course 3.</p>
						<button className="bg-blue-500 text-white px-4 py-2 rounded">Join Now</button>
					</div>
				</div>
			</div>
		</>
	)
}
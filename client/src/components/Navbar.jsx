import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-green-700 flex justify-between px-10 py-4">
      <Link to='/' className="text-white font-bold">
        <h1>MERN stack with MySQL</h1>
      </Link>
      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="bg-black text-blue-500 px-2 py-1 rounded-md font-bold">Home</Link>
        </li>
        <li>
          <Link to="/new" className="bg-black text-white px-2 py-1 rounded-md font-bold">Create task</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

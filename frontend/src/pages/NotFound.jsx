import { GoAlert } from "react-icons/go";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="text-center">
        <GoAlert className="w-16 h-16 text-black-500 mx-auto mb-4" />
        <h1 className="text-6xl font-bold mb-2">404</h1>
        <p className="text-xl font-medium mb-4">Page Not Found</p>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink
          to="/"
          className="py-2 px-20 text-black border-1 bg-white hover:bg-black hover:text-white transition-colors"
        >
          Go Home
        </NavLink>
      </div>
  </div>
  )
}

export default NotFound
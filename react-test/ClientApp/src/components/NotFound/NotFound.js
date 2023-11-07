import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="text-center">
            <h1>Oops! You seem to be lost.</h1>
            <h6>Go back to main page: <Link to='/'>Home</Link></h6>
        </div>
    )
}
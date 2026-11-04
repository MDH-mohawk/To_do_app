import '../Styling/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <div className="nav">
                <Link to='/'>Home</Link>
                <Link to='/categories'>Categories</Link>
        </div>
    )
};

export default Navbar;
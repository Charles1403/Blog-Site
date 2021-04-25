import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <h1>Dojo Blog</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                 color: "white",
                 backgroundColor: "#f1356d",
                borderRadius: "8px"
                }}>New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;

// the link tag is an anchor tag from the react library
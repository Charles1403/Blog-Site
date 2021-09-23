import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <h1>LatestTrends</h1>
            <div className='links'>
                <Link to="/" style={{
                    color: "#444",
                    backgroundColor: "#FEE996",
                   borderRadius: "8px",
                   fontFamily: "Quicksand', sans-serif",
                   fontWeight: "900"
                }}>Home</Link>
                <Link to="/create" style={{
                 color: "#444",
                 backgroundColor: "#FEE996",
                borderRadius: "8px",
                fontFamily: "Quicksand', sans-serif",
                fontWeight: "900"
                }}>New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;

// the link tag is an anchor tag from the react library
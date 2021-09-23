import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>SORRY!</h2>
            <p>That page cannot be found</p>
            <br/><br/>
            <Link to='/'  style={{
                textDecoration: "none",
                color: "blue"
            }}> Go Back</Link>
        </div>
     );
}
 
export default NotFound;
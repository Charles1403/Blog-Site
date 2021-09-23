// import { useEffect, useState } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {

    const {data: blogs, isPending, error} = useFetch(' http://localhost:8000/blogs')

    //const [ name, setName] = useState('mario');
    //const [ age, setAge] = useState(20);
    //const handleClick = () => {

       // setName('Charles')  this is used to update the array object or whatever the fuck there is
        //setAge(25)  

       // the useState is used to update using react
      
    //    const handleDelete = (id) => {
    //        const newBlogs = blogs.filter((blog) => blog.id !== id)
    //        setBlogs(newBlogs)
    //    }

    //    const [name, setName] = useState('Samuel')
        // the useEffect is used to run a function everytime there is a reload of the page or a re-render of the page... this fires after every render
      
        return ( 
            <div className="home">
                { error && <div> { error }</div>}
                 { isPending && <div><span>Loading...</span></div>}
               { blogs && <BlogList blogs={blogs}  title=""  />}
              
               {/* the 'blogs &&' is called conditional templating which means that it evaluates the left first and if it returns false it dosent bother to check out the right hand side  */}
               {/* <button onClick={() => setName('charles')}>Change Name</button>  */}
               {/* <p> { name } </p> */}
    
            </div>
         );
        
    }
  
 
export default Home;

// filter method activates when it returns false

// npx json-server --watch data/db.js --port 8000  --- this is used to watch another file in another port

// [
//     {title: 'Manchester city', author: 'Pep Guardiola', body: 'england', id: 1},
//     {title: 'Manchester united', author: 'Ole gunner', body: 'england', id: 2},
//     {title: 'Chelsea', author: 'Pep Guardiola', body: 'england', id: 3},
// ]


// custom hooks in react need to start with the word "use" unless they wont work
import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {

    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('')
    const [ author, setAuthor ] = useState('mario');
    const [isPending, setIspending] = useState(false);
    const history = useHistory();  // this is used to go back and forth in a browser and also redirect a user around the application
    const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author }

    setIspending(true);

    fetch('http://localhost:8000/blogs', {   // this is how to make a fetch request from a server ... it is very important charles, use your head o dont be too loose
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify(blog)

    } ).then(() => {
        console.log('new blog added')

        setIspending(false)
       // history.go(-1)  ---   // this shows the user plans to go one step backwards and so on and so forth
        history.push('/')  // this is used to redirect the page to the path inputed
       
    })
    .catch(err => {
        console.log(err.message)
    })
}

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog Title: </label>
                <input 
                type="text"
                required
                value= {title}  // this is to associate the input tag with the state function
                onChange = {(e) => setTitle(e.target.value)}   
                // this is to make sure the value changes
                />
                <label> Blog Body : </label>
                <textarea 
                required
                value={ body }
                onChange= {(e) => setBody(e.target.value)}
                ></textarea>
                <label> Blog Author : </label>
                <select 
                   value={ author }
                   onChange= {(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { ! isPending && <button>Add Blog</button>}
                {  isPending && <button> Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;

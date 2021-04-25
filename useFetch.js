import { useState, useEffect} from 'react'


const useFetch = (url)=> {
    const [ data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController(); // the abort controller is used to stop errors bla blah blah ikole puta
        setTimeout(() => {
          fetch(url, {signal: abortCont.signal})
          .then((res) => {
              if(!res.ok) {
                  throw Error('could not fetch data for that resource'); // this is used to throw error messages
              }
              return res.json()
          })
          .then(data => {
             setData(data)
             setIsPending(false) // this is to make the laoding sign stop showing
             setError(null)
          })
          .catch((err) => {
              if(err.name === 'AbortError') {
                   console.log('fetch aborted')
              } else {
                setIsPending(false)
                setError(err.message);
              }
              
            
          })
        }, 1000)
        return () => abortCont.abort();
     }, [url]);  // the empty array is called a useEffect dependency... this allows the function to be ran only once... adding a value in the empty array allows react to watch for only the changes of the value
           return {data, isPending, error}  // always return to enable acess in other files
}

export default useFetch;
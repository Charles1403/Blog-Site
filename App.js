import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
   <div className= 'App'>
     <Navbar></Navbar>
     <div className= 'content'>
         <Switch>                {/*  // the switch component is used to direct users to the valid path and only the valid path it is also there to make sure that only one component shows on the browser at a time// */}
         <Route exact path="/">  
           <Home />
         </Route>
         <Route path="/create">
           <Create />
         </Route>
          <Route path="/blogs/:id">   {/* this is used to allow the browser catch the path with the valid id  */}
           <BlogDetails />
         </Route>
          <Route path="*">  {/*it represents all the unavailable routes - the asterics sign stands for catch all route... it means it reps other routes thats why it is placed at the bottom of the page so it wont catch any of the existing routes  */}
           <NotFound />
         </Route>
       </Switch>
     </div>

   </div>
   </Router>
  );
}

export default App;

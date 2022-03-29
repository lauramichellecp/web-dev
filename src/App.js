import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";

import HomeScreen from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen";

import {BrowserRouter, Route, Routes}
        from "react-router-dom";

const App = () => {
 return (
   <BrowserRouter>
     <div className="container">
       <Routes>
         <Route path="/">
           <Route index element={<Labs />} />
           <Route path="labs"
                  exact={true}
                  element={<Labs />} />
           <Route path="hello"
                  element={<HelloWorld/>}/>
           <Route path="tuiter"
                  element={<Tuiter/>}>
             <Route index
                    element={<HomeScreen/>}/>
             <Route path="explore"
                    element={<ExploreScreen/>}/>
           </Route>
         </Route>
       </Routes>
     </div>
   </BrowserRouter>
 );
}
export default App;

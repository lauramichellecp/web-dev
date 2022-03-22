import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <div>
            <div className="input-group">
               <i className="fas fa-search icon pt-2 pr-9"></i>
               <input type="text" className="rounded-pill form-control input-field"
                      width="70%"
                      placeholder=" Search Tuiter"/>
               <i className="fa fa-cog fg-color-blue float-right pt-2"></i>
            </div>
            <div>
               <ul className="nav nav-tabs nav-fill pt-3 pl-2">
                   <li className="nav-item font fg-color-blue">
                       <a className="nav-link active " href="for-you.html">For you</a>
                   </li>
                   <li className="nav-item font">
                       <a className="nav-link" href="trending.html">Trending</a>
                   </li>
                   <li className="nav-item font">
                       <a className="nav-link" href="news.html">News</a>
                   </li>
                   <li className="nav-item font">
                       <a className="nav-link" href="sports.html">Sports</a>
                   </li>
                   <li className="nav-item font d-none d-md-block">
                       <a className="nav-link" href="entertainment.html">Entertainment</a>
                   </li>
               </ul>
            </div>
            <PostSummaryList/>
       </div>
    );
}
export default ExploreComponent;

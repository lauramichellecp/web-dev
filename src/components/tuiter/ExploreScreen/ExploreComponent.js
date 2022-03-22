import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <div>
           <div className="col-10 col-sm-10 col-md-10 col-lg-6">
               <div className="row">
                   <div className="input-group">
                       <div className="input-icons">
                           <div className="row">
                               <div className="col-10">
                                   <i className="fas fa-search icon"></i>
                                   <input type="text" className="rounded-pill form-control input-field"
                                          placeholder="      Search Tuiter"/>
                               </div>
                               <div className="col-2 pt-2">
                                   <i className="fa fa-cog fg-color-blue float-right"></i>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div>
                       <ul className="nav nav-tabs nav-fill pt-3">
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
           </div>
        </div>
    );
}
export default ExploreComponent;

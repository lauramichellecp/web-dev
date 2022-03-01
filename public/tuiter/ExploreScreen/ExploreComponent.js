import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
           <div class="col-10 col-sm-10 col-md-10 col-lg-6">
               <div class="row">
                   <div class="input-group">
                       <div class="input-icons">
                           <div class="row">
                               <div class="col-10">
                                   <i class="fas fa-search icon"></i>
                                   <input type="text" class="rounded-pill form-control input-field"
                                          placeholder="      Search Tuiter">
                               </div>
                               <div class="col-2 pt-2">
                                   <i class="fa fa-cog fg-color-blue float-right"></i>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div>
                       <ul class="nav nav-tabs nav-fill pt-3">
                           <li class="nav-item font fg-color-blue">
                               <a class="nav-link active " href="for-you.html">For you</a>
                           </li>
                           <li class="nav-item font">
                               <a class="nav-link" href="trending.html">Trending</a>
                           </li>
                           <li class="nav-item font">
                               <a class="nav-link" href="news.html">News</a>
                           </li>
                           <li class="nav-item font">
                               <a class="nav-link" href="sports.html">Sports</a>
                           </li>
                           <li class="nav-item font d-none d-md-block">
                               <a class="nav-link" href="entertainment.html">Entertainment</a>
                           </li>
                       </ul>
                   </div>
                  ${PostSummaryList()}
               </div>
           </div>
    `);
}
export default ExploreComponent;

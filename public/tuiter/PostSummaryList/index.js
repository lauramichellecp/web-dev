import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js"

const PostSummaryList = () => {
    return (`
        <ul class="list-group ">
            <div class="image-card">
                <img class="card-img-top pt-2" src="../pic/spacex.jpg">
                <h2 class="image-text">SpaceX's Starship</h2>
            </div>
            ${
                post.map(item => {
                    return(PostSummaryItem(item));
                }).join('')
            }
        </ul>

`); }

export default PostSummaryList;

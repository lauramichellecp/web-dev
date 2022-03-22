import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./post.json"

const PostSummaryList = () => {
    return (
    <>
        <ul className="list-group ">
            <div className="image-card">
                <img className="card-img-top pt-2" src="/tuiter/pic/spacex.jpg"/>
                <h2 className="image-text">SpaceXs Starship</h2>
            </div>
            {
                posts.map(post => {
                    return(
                        <PostSummaryItem post={post}/>
                    );
                })
            }
        </ul>
    </>
); }
export default PostSummaryList;

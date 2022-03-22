import React from "react";

const PostSummaryItem = (
 {
     post = {
         "topic": "Web Development",
         "userName": "ReactJS",
         "time": "2h",
         "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
         "image": "/tuiter/pic/react.jpg",
     }
 }) => {
    return(
    <>
        <li className="list-group-item">
            <div className="row">
                <span className="col-8 font">
                    <span className="fg-color-gray">{post.topic} </span><br/>
                    <span className="bolded">{post.userName} <i className="fas fa-check-circle ps-1"></i></span>
                    <span className="fg-color-gray">   - {post.time}</span><br/>
                    <span className="bolded">{post.title}</span>
                </span>
                <span className="col-4">
                    <img className="rounded float-right" src={post.image} alt="item image" width="80px" />
                </span>
            </div>
        </li>
    </>
    ); }
export default PostSummaryItem;
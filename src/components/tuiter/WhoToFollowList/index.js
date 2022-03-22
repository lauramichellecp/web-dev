import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
    <>
        <div className="list-group">
            <li className="list-group-item">
                <div className="row">
                    <span className="font bolded">Who to follow</span>
                </div>
            </li>
            {
                 who.map(who => {
                     return(
                         <WhoToFollowListItem who={who}/>
                     );
                 })
             }
        </div>
    </>
); }

export default WhoToFollowList;

import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
import React from "react";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="font bolded">Who to follow</span>
                </li>
                {
                    who.map(who => {
                        return(<WhoToFollowListItem key={who.handle} who={who}/>);
                    })
                }
            </ul>
        </div>
    );
}

export default WhoToFollowList;
import React from "react";
import "./tuit.css";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../actions/tuits-actions";

import TuitStats from "./TuitStats";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();

    return(
        <div className="list-group-item">
            <div className="align-text-top">
                <img className="rounded-circle wd-avatar-image"
                     alt="..."
                     src={tuit.avatarImg}/>
            </div>
            <div className="ps-3" style={{width: '100%'}}>
                <i className="fas fa-trash fa-pull-right"
                  onClick={() => deleteTuit(dispatch, tuit)}></i>
                <div className="wd-float-left">
                    <span className="wd-gray-text">@{tuit.handle} • {tuit.time}</span>
                    <p className="wd-post-text">{tuit.tuit}</p>
                </div>
                {
                    tuit.attachments && tuit.attachments.image &&
                    <img src={tuit.attachments.image}
                         alt="..."
                         className="mt-2 wd-border-radius-20px"
                         style={{width: "100%"}}/>
                }
                {
                    tuit.attachments && tuit.attachments.video &&
                    <iframe width="100%" height="350px"
                            className="mt-2 wd-border-radius-20px"
                            style={{width: "100%"}}
                            src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                }
                <TuitStats tuit={tuit}/>
            </div>
        </div>
    );
};
export default TuitListItem;
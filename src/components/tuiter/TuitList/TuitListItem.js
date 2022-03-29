import React from "react";
import "./tuit.css";
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitClickHandler = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    }
    return(
        <div className="list-group-item">
            <div className="align-text-top">
                <img className="rounded-circle wd-avatar-image"
                     alt="..."
                     src={tuit['logo-image']}/>
            </div>
            <div className="ps-3" style={{width: '100%'}}>
                <i onClick={deleteTuitClickHandler(tuit)} className="fa fa-remove fa-pull-right"></i>
                <span className="fw-bold">{tuit.userName}</span>
                {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
                <span className="ms-1 text-secondary">@{tuit.handle}</span>
                <div>
                    {tuit.tuit}
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
                {/*{JSON.stringify(tuit)}*/}
                <TuitStats tuit={tuit}/>
            </div>
        </div>
    );
};
export default TuitListItem;
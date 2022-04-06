import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const tuitLikes = () =>
    {
        updateTuit(dispatch, { ...tuit, likes: tuit.likes + 1})
    };
    const tuitDislikes = () =>
    {
        updateTuit(dispatch, { ...tuit, dislikes: tuit.dislikes + 1})
    };
    return (<div className="row mt-2">
        <div className="col">
            <i className="far fa-comment"></i>
            {tuit.comments}
        </div>
        <div className="col">
            <i className="fas fa-retweet me-2"></i>
            {tuit.retuits}
        </div>
        <div className="col">{tuit.likes}
             <i onClick={tuitLikes} className="far fa-thumbs-up ms-2"></i>
        </div>
        <div className="col">{tuit.dislikes}
             <i onClick={tuitDislikes} className="far fa-thumbs-down ms-2"></i>
        </div>
        <div className="col">
            <i className="fas fa-external-link-alt me-2"></i>
        </div>
    </div>);
};
export default TuitStats;
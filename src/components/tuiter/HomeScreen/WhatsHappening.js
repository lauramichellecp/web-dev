import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../actions/tuits-actions";

import "./index.css";

const WhatsHappening = () => {
  const dispatch = useDispatch();
  const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});
  return (
    <>
      <div className="row pb-3">
          <textarea className="form-control w-75"
                placeholder="What's happening?"
                value={newTuit.value}
                onChange={(e) => setNewTuit({...newTuit,
                 tuit: e.target.value})}>
          </textarea>
          <div className="col-md-2">
              <button onClick={() =>
                createTuit(dispatch, newTuit)}
                  className="btn btn-primary float-end">
                Tuit
              </button>
          </div>
          <div className="col-md-10 pt-2">
               <i className="fas fa-image fa-lg pe-1 blue"></i>
               <i className="fas fa-chart-bar fa-lg pe-1 blue"></i>
               <i className="fas fa-smile fa-lg pe-1 blue"></i>
               <i className="fas fa-calendar fa-lg pe-1 blue"></i>
           </div>
       </div>
    </>
  );
}
export default WhatsHappening;
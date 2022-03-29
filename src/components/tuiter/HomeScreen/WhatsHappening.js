import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "./index.css";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit',
              tuit: whatsHappening});
  }
  return (
    <>
      <div className="row">
            <textarea className="bg-black form-control"
                value={whatsHappening}
                placeholder="What's happening?"
                onChange={(event) =>
                  setWhatsHappening(event.target.value)
                }>
            </textarea>
          <div className="col-md-10">
              <i className="fas fa-image pe-1 blue"></i>
              <i className="fas fa-chart-bar pe-1 blue"></i>
              <i className="fas fa-smile pe-1 blue"></i>
              <i className="fas fa-calendar pe-1 blue"></i>
          </div>
          <div className="col-md-2">
              <button className="btn btn-primary rounded-pill float-right" onClick={tuitClickHandler}>
                Tuit
              </button>
          </div>
       </div>
    </>
  );
}
export default WhatsHappening;
import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return(
      <div>
          <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
          <ReduxExamples/>
      </div>
    )
};

export default Labs;

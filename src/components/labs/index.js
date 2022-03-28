import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./redux-examples";

import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list"

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

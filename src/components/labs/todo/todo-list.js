import TodoItem from "./todo-item";
import todos from "./todos.json";

const TodoList = () => {
    return(
        <ul>
            {
                todos.map(todo => {
                    return(<TodoItem key={todo.title} todo={todo}/>);
                })
            }
        </ul>
    );
}
export default TodoList;
import { Todos } from './Todos';
import { connect } from "../utils/react-redux";
import { Todo } from "../interfaces";
import { addTodo, checkTodo, removeTodo } from "../store/todo/actions";

const mapStateToProps = (state: any) => ({
  todos: state,
});

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (todo: Todo) => dispatch(addTodo(todo)),
  removeTodo: (id: number) => dispatch(removeTodo(id)),
  checkTodo: (id: number) => dispatch(checkTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

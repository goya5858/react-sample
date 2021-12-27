import React from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {

    const todo_list = [
        "Appから",
        "TodoListにデータを",
        "データを渡せているかのテスト"
    ];
	
	return (
       <div className="container">
           <div className="row justify-content-center">
               <div className="col-md-8">
                   <div className="card">
                       <div className="card-header">ToDo App</div>

                       <div className="card-body">
							<TodoForm />
                            <TodoList items={ todo_list } />
						</div>
                   </div>
               </div>
           </div>
       </div>
   );
}

export default App;
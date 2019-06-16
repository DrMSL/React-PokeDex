import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import uuid from 'uuid';

export class Teams extends Component {
    state = {
        todos: [
          {
            id: uuid.v4(),
            title: 'Le Team Ultime',
            completed: false
          },
          {
            id: uuid.v4(),
            title: 'Warriors',
            completed: false
          },
        ]
    
      }
    

      



    // Delete Todo
    delTodo = async (id) => {
      await  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
      localStorage.setItem('teams', JSON.stringify(this.state.todos));
      console.log(localStorage.getItem('teams'));
    }

     // Add Todo
     addTodo = async (title) => {
       const newTodo = {
         id: uuid.v4(),
         title: title,
         completed: false
       }
      await this.setState({ todos: [...this.state.todos, newTodo] });
      localStorage.setItem('teams', JSON.stringify(this.state.todos));
      console.log(localStorage.getItem('teams'));
     }

   

     





    render() {
        return (
            <div className='container'>
              <h1
              style={{ width: '100%', padding: '10px 5px', backgroundColor: '#55a0d6', color: '#fff', marginBottom: '0' }}
              >Poké Teams</h1>
               <Todos todos={this.state.todos} delTodo={this.delTodo}/>
                <AddTodo addTodo= {this.addTodo}/>
           </div>
        )
    }
}

export default Teams

import React, {Component} from 'react'


class TodoInput extends Component{

    render(){
        const {item, handleChange, handleSubmit, editItem, handleDate} = this.props
        return (
          <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                  <i className="fas fa-book" />
                </div>
              </div>
              {console.log(item)}
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="add a todo item"
                value={item}
                onChange={handleChange} 
              />
               <input onChange={handleDate} type="date"></input>
            </div>
           
            <button
              type="submit"
              className="btn btn-block btn-primary mt-3">
          
              {editItem ? "Edit Item" : "Add Item"}
            </button>
          </form>
          
        </div>
      );
    }
  }
export default TodoInput;

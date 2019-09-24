import React, {Component} from 'react'

class TodoItem extends Component{

    render(){
        const {title, dateTime, createdAt, handleDelete, handleEdit} = this.props
        return(
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
              <div>
                <h6>{title}</h6>
              </div>
              <div>
              <p>{dateTime}</p>
              <p>Created At {createdAt}</p>
              </div>
            <div className="todo-icon">
              <span className="mx-2 text-success" onClick={handleEdit}>
                <i className="fas fa-pen" />
              </span>
              <span className="mx-2 text-danger" onClick={handleDelete}>
                <i className="fas fa-trash" />
              </span>
            </div>
          </li>
        )
    }
}
export default TodoItem;
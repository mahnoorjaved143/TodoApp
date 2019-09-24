import React, { Component }  from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import dateFormat from 'dateformat';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
    dateTime: '',
    createdAt:new Date().toLocaleString()
    
  };

  handleDate = e => {
    const formdateTime= e.target.value
    this.setState({
     dateTime:formdateTime
      
    });
    
  };
  
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
    
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e)

    const newItem = {
      id: this.state.id,
      title: this.state.item,
      dateTime:this.state.dateTime   
    }
    
    const updatedItems = [...this.state.items, newItem];
   
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      
    }); 
  };
  clearList =() =>{
    this.setState({
      items:[]
    })
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !==id);
    this.setState({
      items:filteredItems
    })
  }

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);

    console.log(selectedItem);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };

  render(){ 
      return (
        <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            {/* {console.log(this.state.item)} */}
            
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleDate={this.handleDate}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}            
            />
            <TodoList 
              items={this.state.items}
              dateTime={this.state.dateTime}  
              clearList={this.clearList}
              createdAt={this.state.createdAt}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}   
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;

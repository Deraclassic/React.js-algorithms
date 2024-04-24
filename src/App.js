import React from "react";

class UniqueList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      fruits:"",
      fruitList:[]
    }
    
    this.handleChange=this.handleChange.bind(this)
  }
  
  handleChange(e){
    this.setState({fruits:e.target.value.trim()})
  }
  
  addItems(){
      const isExist = this.state.fruitList.find(item => item == this.state.fruits.trim())
      
      if(!isExist){
         this.setState({fruits:"", 
                   fruitList:[...this.state.fruitList, this.state.fruits.trim()]})
      } 
  }
  
  removeItem(fruitName){
    const remainingFruits = this.state.fruitList.filter(item => item !== fruitName)
    this.setState({fruits:"", fruitList:remainingFruits})
  }
  
  clear(){
    
    if(this.state.fruitList.length > 0){
         this.setState({fruits:"", fruitList:[]})
    }
 
  }
  
  render() {
    return (
      <>
        <div>
          <input
            className="item-input"
            type="text"
            value={this.state.fruits}
            onChange={(e) => this.handleChange(e)}
            onKeyDown={() => this.addItems()}
          />
          <input
            className="add-button"
            type="button"
            value="Add Item"
            onClick={() => this.addItems()}
          />
          <input
            className="remove-button"
            type="button"
            value="Remove Item"
            onClick={() => this.removeItem(this.state.fruits)}
          />
          <input
            className="clear-button"
            type="button"
            value="Clear Items"
            onClick={() => this.clear()}
          />
        </div>
        <ul className="items">
          {this.state.fruitList.map(item => <li>{item}</li>)}
        </ul>
      </>
    );
  }
}

export default UniqueList;
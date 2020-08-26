import React,{Component} from 'react';
class Counter extends Component{
  state={
    count:0,
    tags:['tag1','tag2','tag3']
   
  }
  render(){

    return(
      <div>
      
      <span className="badge badge-warning m-2">
      {this.formateCount()} 
      </span>
      <button className="btn btn-secondary btn-sm" >Increment</button>
      <ul>
      {this.state.tags.map(tag=>
      <li key={tag}>{tag}</li>)}
      
      </ul>
      </div>
    );
  
  }
    formateCount(){
      const {count}=this.state
      return count===0? 'Zero' :count
    }
}
export default Counter;
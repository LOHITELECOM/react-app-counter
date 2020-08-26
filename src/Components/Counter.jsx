import React,{Component} from 'react';
class Counter extends Component{
  state={
    count:0,
    tags:[]
   }
   renderTags(){
     if(this.state.tags.length===0) return <p>No tags found</p>;
     return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)} </ul>
   }
  render(){

    return(
      <div>
      
      <span className="badge badge-warning m-2">
      {this.formateCount()} 
      </span>
      <button className="btn btn-secondary btn-sm" >Increment</button>
     {this.state.tags.length===0 && "please enter tags"}
     {this.renderTags()}
      </div>
    );
  
  }
    formateCount(){
      const {count}=this.state
      return count===0? 'Zero' :count
    }
}
export default Counter;
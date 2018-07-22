import React, { Component } from 'react';
import axios from 'axios';
class Search extends Component{

 SearchHadelar = (e) => {
e.preventDefault();
const keyType = this.refs.inputword.value;
axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

 }   

render(){
return(
    <form >
    <div className="form-group">
      <label htmlFor="email">Search Place</label>
      <input type="text" className="form-control" ref="inputword"/>
    </div>
    
    <button onClick={this.SearchHadelar.bind(this)} className="btn btn-default">Search</button>
  </form>
 
);
}
}

export default Search;
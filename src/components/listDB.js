import React from 'react'
import { Redirect,withRouter   } from 'react-router-dom'
import Home from './home';

class ListDB extends React.Component {

    constructor() {
      super();
      this.state = { data: [] };
      this.Test = this.Test.bind(this);
 
    }
    componentDidMount(){
      document.title = "ListDB"
      const fetchAsync = async () =>{
        const resultado = await fetch('http://18.228.162.212:4000/find');
        const json=await resultado.json();
        this.setState({ data: json });
      }
      fetchAsync();
    }    

    Test(){
        {this.state.data.map((item, index) => (
                      
          <div key={index} className="itemcs">
            
            {item.name_search} {item.date} cantidad:{item.items.length} { console.log(item.items) } - {item.items[0].name} 

          </div> 
        ))}
        console.log('se ejecuto');
    }

    Detail(id){
      console.log('detail: '+id);
      this.props.history.push('/detail/'+id);
 
    }
    
  render() {
    return (
      <div className="container">
        <h2><center>User Searches</center></h2>
        <hr/>
        {this.state.data.map((item, index) => (
          <div key={index} className="itemcs">
             <div className="text_item"><b>Name:</b> {item.name_search}</div>
             <div className="text_item"><b>Date:</b> {item.date}</div>
             <div className="text_item"><b>Results:</b> {item.items.length}</div>
             <div className="btn_item"><button type="submit" className="btn btn-success btn-md " onClick={() => this.Detail(item._id)}>Detail</button></div>
          </div> 
        ))}
       
          
      </div>
      
    );
  }
}
export default ListDB
import React from 'react'
import { Redirect,withRouter   } from 'react-router-dom'
import Home from './home';

class Detail extends React.Component {

    constructor() {
      super();
      this.state = { data: [] };
      this.Detaill = this.Detaill.bind(this);
 
    }
    componentDidMount(){
        const { handle } = this.props.match.params;
        //console.log(this.props.match.params.id);

        document.title = "Detail"
        const fetchAsync = async () =>{
          const resultado = await fetch('http://18.228.162.212:4000/get-search/'+this.props.match.params.id);
          const json=await resultado.json();
          console.log(json[0]);
          console.log(json[0].name_search);
          //this.setState({ data: json[0].items });
          this.setState({ data: json[0] });
          console.log(this.state.data.items );
         
        }
        fetchAsync();        
    }    

    Detaill(id){
      console.log('detail: '+id);
    }
    
    render() {
        if(this.state.data.length==0){
            return (
                <div className="container">
                    <h2><center>Loading</center></h2>
                </div>
            );        
        }else{
            return (
                <div className="container">
                    <h2><center>Detail</center></h2>
                    <p><b>Searched text:</b> {this.state.data.name_search}</p>
                    <p><b>Date:</b> {this.state.data.date}</p>
                    <p><b>Number of results:</b> {this.state.data.items.length}</p>
                    {this.state.data.items.map((el, index) => (
                        
                        <div key={index} className="itemcs">
                            <div className="img_item"><img src={el.images.length>0?el.images[0].url:'not'} height="150" width="150" /></div>
                            <div className="text_item"><b>Name:</b> {el.name}</div>
                            <div className="text_item"><b>Release Date:</b> {el.release_date}</div>
                            <div className="text_item"><b>Total tracks:</b> {el.total_tracks}</div>
                            
                        </div> 
                        
                    ))}
                </div>
            );
        }        

    }
}
export default Detail
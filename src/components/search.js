import React from 'react'
class Search extends React.Component {

  constructor() {
    super();
    this.state = { data: [], input_search: 'Metallica' };
    this.handleChange = this.handleChange.bind(this);
    
  }

  componentDidMount(){
    document.title = "Home"
  }
  
  handleChange(event) {
    this.setState({input_search: event.target.value});
  }
  
  Search = () => {
    
    const fetchAsync = async () =>{
      //const resultado = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10');
      const resultado = await fetch('http://18.228.162.212:4000/search/albums/'+this.state.input_search);
      //const resultado = await fetch('http://localhost:4000/test');
      const json=await resultado.json();
      console.log([json.albums.items]);
      
      this.setState({ data: json.albums.items });

   
      const addMongo = async () =>{
        const resultado = await fetch('http://18.228.162.212:4000/add/'+this.state.input_search);
        const json=await resultado.json();
        console.log('insert mongo ok');
      }
      addMongo();
  

    }
    fetchAsync();


    console.log('test');
  }  
  
  //-  { console.log(el.images.length) }  

  render() {
    return (
      <div className="container">
        <h2><center>Search Album</center></h2>

          <div className="form-group">
            <div className="col-sm-12">
              <input type="query" className="form-control" value={this.state.input_search} onChange={this.handleChange} placeholder=""  autoComplete="off" />
            </div>
          </div>
          <div className="form-group">        
            <div className="col-sm-12">
              <center><button type="submit" className="btn btn-success btn-md " onClick={this.Search}>Search</button></center>
            </div>
          </div>
        
        <hr/>
        
          <pre>
              {this.state.data.map((el, index) => (
                
                  <div key={index} className="itemcs">
                    <div className="img_item"><img src={el.images.length>0?el.images[0].url:'not'} height="150" width="150" /></div>
                    <div className="text_item"><b>Name:</b> {el.name}</div>
                    <div className="text_item"><b>Release Date:</b> {el.release_date}</div>
                    <div className="text_item"><b>Total tracks:</b> {el.total_tracks}</div>
                    
                  </div> 
                
              ))}
          </pre>
        
          
      </div>
      
    );
  }
}
export default Search

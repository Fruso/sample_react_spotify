import React from 'react'
class Home extends React.Component {

  constructor() {
    super();
  }
  componentDidMount(){
    document.title = "Home"
  }

  render() {
    return (
      <div className="container">
        <h1><center>Welcome</center></h1>

        <hr/>
        <h4>Sample project using:</h4>  
        <ul className=""><br/>
          <li className="">React</li>
          <li className="">Mongo</li>
          <li className="">Access token</li>
          <li className="">NodeJs - API</li>
        </ul>                
      </div>
      
    );
  }
}
export default Home

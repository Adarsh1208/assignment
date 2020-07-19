import React, {Component} from 'react';
import './App.css';


class App extends Component{
      constructor(props){
        super(props);
        this.state = {
          isDataPopulated : false,
          memberids : []
        }
      }

      async componentDidMount() {
        try{
          const response = await fetch(`https://yayjk.dev/api/members/allIds`);
          const json = await response.json();
          this.setState({ memberids: json });
        }catch(error){
          console.error();
        }
      }
  
      
      render(){
        return(
          <div>
          <ul>
            {this.state.memberids.map(id => (
              <li>
                {id.id}
              </li>
            ))}
          </ul>
        </div>
        )
      } 
    }
    
    


export default App;

import React, {Component} from 'react';
import MemberDetails from './MemberDetail';
import './App.css';


class App extends Component{
      constructor(props){
        super(props);
        this.state = {
          isDataPopulated : false,
          memberids : []
        }

        this.callNextComponent = this.callNextComponent.bind(this);
        
      }

      async componentDidMount() {
        try{
          const response = await fetch(`https://yayjk.dev/api/members/allIds`);
          const json = await response.json();
          this.setState({ 
            memberids: json.memberIdsList 
          }, () => console.log(this.state));
        }catch(error){
          console.error();
        }
      }

     
  
      
      render(){
        const callNextComponent = function(e) {
          this.setState({isDataPopulated : true});
          let targetValue = e.target.value;
          console.log(targetValue)
        }
        
  
        return(
          <div>
          <ul>
            {this.state.memberids.map((value, index) => {
              return <li> 
                 
                 <button onClick = {callNextComponent.bind(this)}>{value._id}</button>
              </li>
            })
          }
          </ul>
        </div>
        )
      } 
    }
    

export default App;

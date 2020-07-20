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
        if(this.state.isDataPopulated) return <MemberDetails selectedId={this.state.selecteId}/>
        return(
          <div>
            <ul>
              {
                this.state.memberids.map((value,index) => {
                  return  <li  key={value._id}>
                  <button onClick={()=>this.setState({isDataPopulated : true,selecteId : value._id})}>{value._id}</button>
                  </li>
                  })
              }                    
          </ul>
        </div>
        )
      } 
    }
    

export default App;
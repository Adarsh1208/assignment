import React, { Component, useImperativeHandle } from "react";
import App from "./App";

class MemberDetails extends React.Component {
    
    constructor (props){
        super (props);
        this.state = {
            selectedMember : this.props.id,
            memberDetails : {},
            teamMemberIds : []
        }

        this.fetchingAPI = this.fetchingAPI.bind(this);
        this.handleCLick = this.handleCLick.bind(this);
    }

     componentDidMount(){
        fetchingAPI();
    }


    async function fetchingAPI() {
        try{
            const response = await fetch('https://yayjk.dev/api/members/'+ {this.state.selectedMember});
            const json = await response.json();
            this.setState({
                memberDetails : json.memberDetails,
                teamMemberIds : json.teamMemberIds
            }, () => console.log(this.state));

        }catch(error){
            console.error();
        }
    }
    componentDidUpdate(prevProps, prevState){
       if(prevState.selectedMember != this.state.selectedMember){
           fetchingAPI();
       }
    }

    function handleCLick (e) {
        this.setState({
            selectedMember : e.target.value
        })
    }

    render(){
        return (
            <div>
                <ul>
                    {this.state.memberDetails.map((key, i) => {
                         return (<div>
                             <li>key._id</li>
                                <li>key.team</li>
                                <li>key.name</li>
                                <li>key.email</li>
                                <li>key.phone</li>
                                <li>key.position</li>
                                <li>key.dateOfJoining</li>
                         </div>)
                    })}
                </ul>

                <ul>
                    {this.state.teamMemberIds.map((value, index) => {
                        return <li>
                            <button onClick = {handleClick()} >{value._id}</button>
                        </li>
                    })}
                </ul>
            </div>
        )
    }



}

export default MemberDetails;
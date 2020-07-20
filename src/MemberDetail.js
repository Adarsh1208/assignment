import React from "react";


class MemberDetails extends React.Component {
    
    constructor (props){
        super (props);
        this.state = {
            selectedMember : this.props.selectedId,
            memberDetails : {},
            teamMemberIds : []
        }

    }

     componentDidMount(){
        this.fetchingAPI();
    }


    fetchingAPI = async () => {
        try{
            const response = await fetch('https://yayjk.dev/api/members/'+ this.state.selectedMember);
            const json = await response.json();
            console.log(json)
            this.setState({
                memberDetails : json.memberDetails,
                teamMemberIds : json.teamMembersId
            }, () => console.log(this.state));

        }catch(error){
            console.error();
        }
    }
    componentDidUpdate(prevProps, prevState){
       if(prevState.selectedMember !== this.state.selectedMember){
           this.fetchingAPI();
       }
    }
    handleClick = (id) =>{
        this.setState({
            selectedMember : id
        })
    }

    render(){
        let member = this.state.memberDetails
        return (
            
                <div>
    
                <div>
                    <h2> Member details </h2>
                    <br/>
                    <span> Name :</span> <span>{member.name}</span>
                    <br />
                    <span>team :</span> <span>{member.team}</span>
                    <br />
                    <span> phone :</span> <span>{member.phone}</span>
                    <br />
                    <span> position :</span> <span>{member.position}</span>
                    <br />

                </div>

                <ul>
                    {
                        this.state.teamMemberIds.map((values,index) => {
                            return <li key={values._id}>
                                <button onClick={() => this.handleClick(values._id)}>{values._id}</button>
                            </li>
                        })
                    }
                </ul>
             

                    </div>


        )
    }



}


export default MemberDetails;
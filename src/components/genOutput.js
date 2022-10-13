import React, {Component} from "react";
class GenOutput extends Component {
    render(){
        if(this.props.Show){
            return(
                Object.keys(this.props.General).map((key)=>{
                return <div key={key}><h2>{key}:</h2>{this.props.General[key]}</div>
            })
            )
        }
        else return <Default />
    }
}

function Default() {
    return(
        <div>
        <h2>First Name:</h2>
        <h2>Last Name:</h2>
        <h2>Address:</h2>
        <h2>Phone:</h2>
        </div>
        )
}

export default GenOutput;
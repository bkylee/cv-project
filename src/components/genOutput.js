import React, {Component} from "react";
import './style.css'
class GenOutput extends Component {
    render(){
        let output= Object.keys(this.props.General).map((key)=>{
            if(key === "show" || key === "editor"){ return null} else{
            return <div key={key}><h2>{key}:</h2>{this.props.General[key]}</div>}
    });
return(
<div className="Output">{output}</div>
)
    }
}


export default GenOutput;
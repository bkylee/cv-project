import React, { Component } from "react";
import GenOutput from "./genOutput";

class GeneralComp extends Component {
    constructor(props){
        super(props);
        this.state={
            FirstName: '',
            LastName: '',
            Address: '',
            Phone: '',
            show: false,
            editor:true
        }
    }

    editTrue=()=>{
        this.setState({
            editor:true
        });
    };

    editFalse=()=>{
        this.setState({
            editor: false
        });
    };
    onChange =(e)=>{
        this.setState({
              [e.target.name]: e.target.value
          });   
    }

    onSub = (e)=>{
        e.preventDefault();
        if (this.state.show){
        this.setState({
            show: false
        })
    } else{this.setState({
        show: true
    })}
}


   render(){
    const {FirstName, LastName, Address, Phone} = this.state;
    let form;
    let output;
    if(this.state.editor){
        form =
        <div>
        <h2>General</h2> 
        <button type='button' onClick={this.editFalse}>Hide</button>
        <button type='button' onClick={this.onSub}>Output</button>
            <form>
                <label htmlFor="FirstName">First Name:</label>
                <input 
                name="FirstName" 
                type="text"
                onChange={this.onChange}
                value={FirstName}
                />
                
                <label htmlFor="LastName">Last Name:</label>
                <input 
                name="LastName" 
                type="text"
                onChange={this.onChange}
                value={LastName} />

                <label htmlFor="Address">Address</label>
                <input 
                name="Address" 
                type="text"
                onChange={this.onChange}
                value={Address} />

                <label htmlFor="Phone">Phone</label>
                <input 
                name="Phone" 
                type="text"
                onChange={this.onChange}
                value={Phone} />
                </form>
            </div>
    } else { 
        form = <DefShow handleEdit={this.editTrue} />
}
if (this.state.show){
    output = <GenOutput General={this.state} />
}else{
    output = null;
}

return(
    <div>{form}{output}</div> 
)
}
}

function DefShow(props){
    return(
        <div>
            <h2>General</h2><button type='button' onClick={props.handleEdit}>Show</button>
        </div>
    )
}

export default GeneralComp;

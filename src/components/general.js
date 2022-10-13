import React, { Component } from "react";

class GeneralComp extends Component {
    constructor(props){
        super(props);
        this.state={
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


   render(){
    let output;
    if(this.state.editor){
        output =
        <FormEditor 
        FirstName={this.props.General.FirstName} LastName={this.props.General.LastName} 
        Address={this.props.General.Address} Phone={this.props.General.Phone} handleChange={this.props.onGeneralChange} 
        handleClick={this.props.onClick} handleEdit={this.editFalse}/>
    } else { 
        output = <DefShow handleEdit={this.editTrue} />
}
return(
    <div>{output}</div> 
)
}
}

class FormEditor extends Component{
    render(){
    return(
        <div>
        <h2>General</h2>
            <form>
                <label htmlFor="FirstName">First Name:</label>
                <input 
                name="FirstName" 
                type="text"
                onChange={this.props.onChange}
                value={this.props.FirstName}
                />
                
                <label htmlFor="LastName">Last Name:</label>
                <input 
                name="LastName" 
                type="text"
                onChange={this.props.onChange}
                value={this.props.LastName} />

                <label htmlFor="Address">Address</label>
                <input 
                name="Address" 
                type="text"
                onChange={this.props.onChange}
                value={this.props.Address} />

                <label htmlFor="Phone">Phone</label>
                <input 
                name="Phone" 
                type="text"
                onChange={this.props.onChange}
                value={this.props.Phone} />
                
                <button type='button' onClick={this.props.handleEdit}>Hide</button>
                <button type='button' onClick={this.props.handleClick}>Output</button>
                </form>
            </div>
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

import React, { Component } from "react";

class GeneralComp extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onGeneralChange(e);
    };

   render(){
    const {FirstName, LastName, Address, Phone}= this.props.General;
    
    return(
        <div>
        <h2>General</h2>
            <form>
                <label htmlFor="FirstName">First Name:</label>
                <input 
                name="FirstName" 
                type="text"
                onChange={this.handleChange}
                value={FirstName}
                />
                
                <label htmlFor="LastName">Last Name:</label>
                <input 
                name="LastName" 
                type="text"
                onChange={this.handleChange}
                value={LastName} />

                <label htmlFor="Address">Address</label>
                <input 
                name="Address" 
                type="text"
                onChange={this.handleChange}
                value={Address} />

                <label htmlFor="Phone">Phone</label>
                <input 
                name="Phone" 
                type="text"
                onChange={this.handleChange}
                value={Phone} />
                
                <button type='button'>Add</button>
                </form>
            </div>
    )
}
}

export default GeneralComp;
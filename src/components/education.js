import React, { Component } from "react";

class EducationComp extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onEducationChange(e);
    };

   render(){
    const {Name, Degree, Program} = this.props.Schools;
    return(
        <div>
        <h2>Education</h2>
            <h3>School:</h3>
            <form>
                <label htmlFor="Name">Name:</label>
                <input 
                name="Name" 
                type="text"
                onChange={this.handleChange}
                value={Name} />
                
                <label htmlFor="Degree">Degree:</label>
                <input 
                name="Degree" 
                type="text"
                onChange={this.handleChange}
                value={Degree} />

                <label htmlFor="Program">Program</label>
                <input 
                name="Program" 
                type="text"
                onChange={this.handleChange}
                value={Program} />
                
                <button type='button'>Submit</button>
                </form>
            </div>
    )
}
}

export default EducationComp;
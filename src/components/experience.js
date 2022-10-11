import React, { Component } from "react";

class ExperienceComp extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onExperienceChange(e);
    };

   render(){
    const {Education, Degrees} = this.props.Education;
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
                value={Education.Name} />
                
                <label htmlFor="Degree">Last Name:</label>
                <input 
                name="Degree" 
                type="text"
                onChange={this.handleChange}
                value={Education.Degree} />

                <label htmlFor="Program">Address</label>
                <input 
                name="Program" 
                type="text"
                onChange={this.handleChange}
                value={Education.Program} />
                
                <button type='button'>Submit</button>
                </form>
            </div>
    )
}
}

export default ExperienceComp;
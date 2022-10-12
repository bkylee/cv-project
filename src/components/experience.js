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
    const {Company, Title, Tenure} = this.props.Exp;
    return(
        <div>
        <h2>Education</h2>
            <h3>School:</h3>
            <form>
                <label htmlFor="Company">Company:</label>
                <input 
                name="Company" 
                type="text"
                onChange={this.handleChange}
                value={Company} />
                
                <label htmlFor="Title">Title:</label>
                <input 
                name="Title" 
                type="text"
                onChange={this.handleChange}
                value={Title} />

                <label htmlFor="Tenure">Tenure</label>
                <input 
                name="Tenure" 
                type="text"
                onChange={this.handleChange}
                value={Tenure} />
                
                <button type='button'>Submit</button>
                </form>
            </div>
    )
}
}

export default ExperienceComp;
import React, { Component } from "react";

class EducationComp extends Component {
    constructor(props){
        super(props);
        this.state={
                School:{
                  Name:'',
                  Degree:'',
                  Program:'',
                },
                Degrees: [],
                show: false,
                editor: true
        }
    }
    onChange=(e)=>{
        this.setState({
          School:{
              [e.target.name] : e.target.value
          }
        })
  }
   render(){
    const {Name, Degree, Program} = this.state.School;
    return(
        <div>
        <h2>Education</h2>
            <h3>School:</h3>
            <form>
                <label htmlFor="Name">Name:</label>
                <input 
                name="Name" 
                type="text"
                onChange={this.onChange}
                value={Name} />
                
                <label htmlFor="Degree">Degree:</label>
                <input 
                name="Degree" 
                type="text"
                onChange={this.onChange}
                value={Degree} />

                <label htmlFor="Program">Program</label>
                <input 
                name="Program" 
                type="text"
                onChange={this.onChange}
                value={Program} />
                
                <button type='button'>Submit</button>
                </form>
            </div>
    )
}
}

export default EducationComp;
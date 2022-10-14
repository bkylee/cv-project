import React, { Component } from "react";
import EduOutput from "./EduOutput";

class EducationComp extends Component {
    constructor(props){
        super(props);
        this.state={
                School:{
                  Name:'',
                  Degree:'',
                  Program:'',
                },
                Schools:[],
                Programs: [],
                Degrees: [],
                show: false,
                editor: true
        }
    }
    
    //this Comp I'm making a onChange method for each nested object property thing. 
    onNameChange=(e)=>{
        this.setState({
          School:{
              Name: e.target.value,
              Degree: this.state.School.Degree,
              Program: this.state.School.Program
          }
        })
  }

  onDegreeChange=(e)=>{
    this.setState({
      School:{
          Name: this.state.School.Name,
          Degree: e.target.value,
          Program: this.state.School.Program
      }
    })
}

onProgramChange=(e)=>{
    this.setState({
      School:{
          Name: this.state.School.Name,
          Degree: this.state.School.Degree,
          Program: e.target.value 
      }
    })
}

showHideEditor=()=>{
    if(!this.state.editor)
    {this.setState({
        editor:true
    })}else{this.setState({editor:false})}
}

onSubmit=()=>{
    this.setState({
        Schools: this.state.Schools.concat(this.state.School.Name),
        Degrees: this.state.Degrees.concat(this.state.School.Degree),
        Programs: this.state.Programs.concat(this.state.School.Program),
        School:{
            Name:'',
            Degree:'',
            Program:'',
          },
    })
}

showHideOutput=()=>{
    if(!this.state.show)
    {this.setState({
        show:true
    })}else{this.setState({show:false})}
}

   render(){
    const {Name, Degree, Program} = this.state.School;
    let form;
    let output; 

    if (this.state.editor){
        form=<div>
        <h2>Education</h2>
        <button type='button' onClick={this.showHideEditor}>Hide</button>
        <button type='button' onClick={this.onSubmit}>Submit</button>
        <button type='button' onClick={this.showHideOutput}>Output</button>
            <h3>School:</h3>
            <form>
                <label htmlFor="Name">Name:</label>
                <input 
                name="Name" 
                type="text"
                onChange={this.onNameChange}
                value={Name} />
                
                <label htmlFor="Degree">Degree:</label>
                <input 
                name="Degree" 
                type="text"
                onChange={this.onDegreeChange}
                value={Degree} />

                <label htmlFor="Program">Program</label>
                <input 
                name="Program" 
                type="text"
                onChange={this.onProgramChange}
                value={Program} />
                </form>
            </div>;
    } else {
        form=<> <h2>Education</h2><button type="button" onClick={this.showHideEditor}>Show</button></>
    };

    if (this.state.show){
        output = <EduOutput Schools={this.state.Schools} Programs={this.state.Programs} Degrees={this.state.Degrees} />
    }
    return(
      <>{form}{output}</>
    )
}
}

export default EducationComp;
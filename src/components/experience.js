import React, { Component } from "react";
import ExpOutput from "./ExpOutput";
import './style.css';

class ExperienceComp extends Component {
    constructor(props){
        super(props);
        this.state ={
              Jobs:[],
              show: false,
              editor: true,
              Company: '',
                Title: '',
                Tenure: '',
                Companies:[],
                Titles:[],
                Tenures:[],
              }
            }
    onChange =(e)=>{
        this.setState({
                [e.target.name]:e.target.value
        })
    };

    onDeleteTitles =(val) =>{
            this.setState({
                Titles: this.state.Titles.filter(element=>
                    element !== val)
                })
            }
    onDeleteCompanies =(val)=>{
            this.setState({
                Companies: this.state.Companies.filter(element=>
                    element !== val)
            });
        }
    onDeleteTenures = (val)=>{
            this.setState({
                Tenures: this.state.Tenures.filter(element=>
                    element !== val)
            });
        }

    onSubmit=()=>{
        this.setState({
            Titles: this.state.Titles.concat(this.state.Title),
            Companies: this.state.Companies.concat(this.state.Company),
            Tenures: this.state.Tenures.concat(this.state.Tenure),
            Company: '',
            Title: '',
            Tenure: '',
        })
    }

    showHideOutput=()=>{
        if(!this.state.show)
        {this.setState({
            show:true
        })}else{this.setState({show:false})}
    }

    showHideEditor=()=>{
        if(!this.state.editor)
        {this.setState({
            editor:true
        })}else{this.setState({editor:false})}
    }

   render(){
    const {Company, Title, Tenure} = this.state
    let form;
    let output; 

    if (this.state.editor){
        form= <div className="FormWrapper">
        <h2>Work Experience</h2>
        <button type='button' onClick={this.showHideEditor}>Hide</button>
        <button type='button' onClick={this.onSubmit}>Submit</button>
        <button type='button' onClick={this.showHideOutput}>Output</button>
            <h3>Job:</h3>
            <form>
                <label htmlFor="Company">Company:</label>
                <input 
                name="Company" 
                type="text"
                onChange={this.onChange}
                value={Company} />
                
                <label htmlFor="Title">Title:</label>
                <input 
                name="Title" 
                type="text"
                onChange={this.onChange}
                value={Title} />

                <label htmlFor="Tenure">Tenure</label>
                <input 
                name="Tenure" 
                type="text"
                onChange={this.onChange}
                value={Tenure} />
                </form>
                </div>
    }else{form = <><h2>Work Experience</h2><button type="button" onClick={this.showHideEditor}>Show</button></>};

    if (this.state.show){
        output = <ExpOutput Companies={this.state.Companies} Titles={this.state.Titles} Tenures={this.state.Tenures} onDeleteTitles={this.onDeleteTitles} onDeleteTenures={this.onDeleteTenures} onDeleteCompanies={this.onDeleteCompanies}/>
    }
    return(
      <div className="CompWrapper">{form}{output}</div>
    )
}
}

export default ExperienceComp;
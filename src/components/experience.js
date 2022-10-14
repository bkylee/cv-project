import React, { Component } from "react";

class ExperienceComp extends Component {
    constructor(props){
        super(props);
        this.state ={
              Jobs:[],
              show: false,
              editor: true,
              Exp:{
                Company: '',
                Title: '',
                Tenure: '',
              }
            }
        }
    onChange =(e)=>{
        this.setState({
            Exp:{
                [e.target.name]:e.target.value
            }
        })
    };

   render(){
    const {Company, Title, Tenure} = this.state.Exp
    return(
        <div>
        <h2>Education</h2>
            <h3>School:</h3>
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
                
                <button type='button'>Add</button>
                <button type='button'>Show</button>
                </form>
            </div>
    )
}
}

export default ExperienceComp;
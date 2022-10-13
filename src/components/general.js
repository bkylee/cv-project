import React, { Component } from "react";

class GeneralComp extends Component {
    constructor(props){
        super(props);
        this.state={
            editor:true
        }
    }

    editTrue(){
        this.setState({
            editor:true
        });
    };

    editFalse(){
        this.setState({
            editor: false
        });
        console.log(this.state.editor)
    };

    
    handleChange(e){
        this.props.onGeneralChange(e);
    };

    handleClick(){
        this.props.onClick();
    }

   render(){
    const {FirstName, LastName, Address, Phone}= this.props.General;
    const editor = this.state.editor;
    let output;
    if(editor){
        output =
        <FormEditor 
        FirstName={FirstName} LastName={LastName} 
        Address={Address} Phone={Phone} handleChange={()=>this.handleChange} 
        handleClick={()=>this.handleClick} handleEdit={()=>this.editFalse}/>
    } else { 
        output = <DefShow handleEdit={()=>this.editTrue} />
}
return(
    <div>{output}</div> 
)
}
}

class FormEditor extends Component{
    handleChange(){
        this.props.handleChange();
    }
    render(){
        const {FirstName, LastName, Address, Phone} = this.props;
    return(
        <div>
        <h2>General</h2>
            <form>
                <label htmlFor="FirstName">First Name:</label>
                <input 
                name="FirstName" 
                type="text"
                onChange={()=>this.props.handleChange}
                value={FirstName}
                />
                
                <label htmlFor="LastName">Last Name:</label>
                <input 
                name="LastName" 
                type="text"
                onChange={()=>this.props.handleChange}
                value={LastName} />

                <label htmlFor="Address">Address</label>
                <input 
                name="Address" 
                type="text"
                onChange={()=>this.props.handleChange}
                value={Address} />

                <label htmlFor="Phone">Phone</label>
                <input 
                name="Phone" 
                type="text"
                onChange={this.props.handleChange}
                value={Phone} />
                
                <button type='button' onClick={()=>this.props.handleEdit}>Hide</button>
                <button type='button' onClick={()=>this.props.handleClick}>Output</button>
                </form>
            </div>
    )
}
}

function DefShow(props){
    return(
        <div>
            <h2>General</h2><button type='button' onClick={()=>props.handleEdit}>Show</button>
        </div>
    )
}

export default GeneralComp;

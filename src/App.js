import { Component } from 'react';
import './App.css';
import GeneralComp from './components/general';
import EducationComp from './components/education';
import ExperienceComp from './components/experience';

class App extends Component{
  constructor(){
    super();

    this.state ={
      General:{
        FirstName: '',
        LastName: '',
        Address: '',
        Phone: ''
        },
      Education:{
        School:{
          Name:'',
          Degree:'',
          Program:'',
        },
        Degrees: []
      },
      Experience:{
        Jobs:[],
        Exp:{
          Company: '',
          Title: '',
          Tenure: '',
        }
      }
  };
}


  onGeneralChange=(e)=>{
    const value = e.target.value;
    const name = e.target.name;

  this.setState({
    General:{
      [name]: value
    }
  });
};

onGeneralSub=(e)=>{
  e.preventDefault();
  
}

onEducationChange=(e)=>{
  const value = e.target.value;
  const name = e.target.name;

  this.setState({
    Education:{
      School:{
      [name]: value
    }
  }
  });
};
onExperienceChange=(e)=>{
  const value = e.target.value;
  const name = e.target.name;
  this.setState({
    Experience:{
      Exp:{
      [name]: value
    }
  }
  });
};

addDegree=(e)=>{
  e.preventDefault();
}




  render(){
  return (
    <div>
      <GeneralComp onGeneralChange={()=>this.onGeneralChange} General={()=>this.state.General}/>
      <EducationComp Schools={()=>this.state.Education.School} onEducationChange={()=>this.onEducationChange}/>
      <ExperienceComp Exp={()=>this.Experience.Exp} onExperienceChange={()=>this.onEducationChange} />
    </div>
  );
}
}

export default App;

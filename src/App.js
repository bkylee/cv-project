import { Component } from 'react';
import './App.css';
import GeneralComp from './components/general';
import EducationComp from './components/education';
import ExperienceComp from './components/experience';
import Output from './components/output';

class App extends Component{
  constructor(){
    super();

    this.state ={
      General:{
        info:{
          FirstName: '',
          LastName: '',
          Address: '',
          Phone: ''
          },
        show: false
        },
      Education:{
        School:{
          Name:'',
          Degree:'',
          Program:'',
        },
        Degrees: [],
        show: false
      },
      Experience:{
        Jobs:[],
        show: false,
        Exp:{
          Company: '',
          Title: '',
          Tenure: '',
        }
      }
  };
}

onGeneralChange=(e)=>{
  this.setState({
    General:{
      [e.target.name]: e.target.value
    }
  });
};

onGeneralSub=()=>{
  this.setState({
    General:{
      show:true
    }
  });
  };

onEducationChange=(e)=>{
  this.setState({
    Education:{
      School:{
      [e.target.name]: e.target.value
    }
  }
  });
};

onExperienceChange=(e)=>{
  this.setState({
    Experience:{
      Exp:{
      [e.target.name]: e.target.value
    }
  }
  });
};

  render() {
  return (
    <div>
      <GeneralComp onClick={this.onGeneralSub} onChange={this.onGeneralChange} General={this.state.General.info}/>
      <EducationComp Schools={this.state.Education.School} onChange={this.onEducationChange}/>
      <ExperienceComp Exp={this.state.Experience.Exp} onChange={this.onExperienceChange} />
      <Output General={this.state.General.info} GenShow={this.state.General.show}/>
    </div>
  );
}
}

export default App;

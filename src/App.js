import { Component } from 'react';
import './App.css';
import GeneralComp from './components/general';
import EducationComp from './components/education';
import ExperienceComp from './components/experience';

class App extends Component{
onGeneralChange=(e)=>{
  this.setState({
    General:{
      [e.target.name]: e.target.value,
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


  render() {
  return (
    <div>
      <GeneralComp />
      <EducationComp />
      <ExperienceComp  />
    </div>
  );
}
}

export default App;

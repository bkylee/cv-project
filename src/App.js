import { Component } from 'react';
import GeneralComp from './components/general';
import EducationComp from './components/education';
import ExperienceComp from './components/experience';

class App extends Component{
  render() {
  return (
    <>
      <GeneralComp />
      <EducationComp />
      <ExperienceComp  />
    </>
  );
}
}

export default App;

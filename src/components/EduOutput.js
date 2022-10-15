import React, { Component } from 'react'
import './style.css';
import uniqid from 'uniqid';

export default class EduOutput extends Component {
  render() {
    const {Degrees, Schools, Programs} = this.props;
    let degrees = Degrees.map((val)=>{
        return <li key={uniqid()}>{val}<button type='button' onClick={()=>this.props.onDeleteDegrees(val)}>Delete</button></li>
    })

    let schools = Schools.map((val)=>{
        return <li key={uniqid()}>{val}<button type='button' onClick={()=>this.props.onDeleteSchools(val)}>Delete</button></li>
    })

    let programs = Programs.map((val)=>{
       return <li key={uniqid()}>{val}<button type='button' onClick={()=>this.props.onDeletePrograms(val)}>Delete</button></li>
    })

    return (
        <div className='Output'>
        <div className='Degrees'><h2>Degrees:</h2>{degrees}</div>
        <div className='Schools'><h2>Schools:</h2>{schools}</div>
        <div className='Progams'><h2>Programs:</h2>{programs}</div>
        </div>
        )
  }
}

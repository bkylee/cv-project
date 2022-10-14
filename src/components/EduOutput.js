import React, { Component } from 'react'

export default class EduOutput extends Component {
  render() {
    const {Degrees, Schools, Programs} = this.props;
    let degrees = Degrees.map((val, index)=>{
        return <li key={index}>{val}</li>
    })

    let schools = Schools.map((val, index)=>{
        return <li key={index}>{val}</li>
    })

    let programs = Programs.map((val, index)=>{
       return <li key={index}>{val}</li>
    })

    return (
        <div id='EduOutput'>
        <div className='Degrees'><h2>Degrees:</h2>{degrees}</div>
        <div className='Schools'><h2>Schools:</h2>{schools}</div>
        <div className='Progams'><h2>Programs:</h2>{programs}</div>
        </div>
        )
  }
}

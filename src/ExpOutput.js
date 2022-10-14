import React, { Component } from 'react'

export default class ExpOutput extends Component {
  render() {
    const {Companies, Titles, Tenures} = this.props;
    let companies = Companies.map((val, index)=>{
        return <li key={index}>{val}</li>
    })

    let titles = Titles.map((val, index)=>{
        return <li key={index}>{val}</li>
    })

    let tenures = Tenures.map((val, index)=>{
       return <li key={index}>{val}</li>
    })

    return (
        <div id='ExpOutput'>
        <div className='Companies'><h2>Companies:</h2>{companies}</div>
        <div className='Titles'><h2>Titles:</h2>{titles}</div>
        <div className='Tenures'><h2>Tenures:</h2>{tenures}</div>
        </div>
        )
  }
}
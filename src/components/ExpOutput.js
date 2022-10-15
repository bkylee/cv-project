import React, { Component } from 'react'
import './style.css'
import uniqid from 'uniqid'

export default class ExpOutput extends Component {
  render() {
    const {Companies, Titles, Tenures} = this.props;
    let companies = Companies.map((val)=>{
        return <li key={uniqid()}>{val}<button type='button' onClick={()=>this.props.onDeleteCompanies(val)}>Delete</button></li>
    });

    let titles = Titles.map((val)=>{
        return <li key={uniqid()}>{val} <button type='button' onClick={()=>this.props.onDeleteTitles(val)}>Delete</button></li>
    });

    let tenures = Tenures.map((val)=>{
       return <li key={uniqid()}>{val}<button type='button' onClick={()=>this.props.onDeleteTenures(val)}>Delete</button></li>
    });

    return (
        <div className='Output'>
        <div className='Companies'><h2>Companies:</h2>{companies}</div>
        <div className='Titles'><h2>Titles:</h2>{titles}</div>
        <div className='Tenures'><h2>Tenures:</h2>{tenures}</div>
        </div>
        )
  }
}
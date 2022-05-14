import React from "react";
import Domains from './Domains';
import './domaindata.css';
import domainApi from '../domainApi.json';

const DomainData = () =>{
    return (
        <div className='container'>
        {
            domainApi.slice(0,10).map((domainApi, index) => (
            <div key={index.toString()}>
              <Domains details={domainApi} />
            </div>
           ))
        }
        </div>
    )
}

export default DomainData
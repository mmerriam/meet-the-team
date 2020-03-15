import React from 'react';
import data from './data.json';
import sortby from 'lodash.sortby';

export default function StudyGuide(props) {

  const getPeopleCards = () => {
    const sortedPeople = sortby(data.people, ['lastName', 'firstName']);

    return sortedPeople.map((person, idx) => {
      let name = person.firstName + ' ' + person.lastName;
      return <div style={{padding: "10px", maxWidth: "180px"}} key={idx}>
        <img alt={name} height="150" src={person.image}></img>
        <div>{person.firstName + ' ' + person.lastName}</div>
        <div>{person.position}</div>
        <div>{person.city}</div>
      </div>;
    });
  } 

  return <div style={{
      display: 'flex', 
      flexDirection: 'row', 
      flexWrap: 'wrap',
      margin: '0 100px',
      }}>
    {getPeopleCards()}
  </div>;
}
 import React from 'react';

function StudentCard(props) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default StudentCard;

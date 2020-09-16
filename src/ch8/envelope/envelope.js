import React from 'react';
import './envelope.css';

function Envelope(props) {
  const { fromPerson, toPerson } = props;
  return (
    <div className="envelope">
      <AddressLabel dir="from" person={fromPerson} />
      <Stamp />
      <AddressLabel dir="to" person={toPerson} />
    </div>
  );
}

function AddressLabel(props) {
  const { person, dir } = props;
  return (
    <div className={'address ' + dir}>
      <span className="fullName">{`${person.firstName} ${person.lastName}`}</span>
      <span className="line1">{person.addressLine1}</span>
      <span className="line2">{person.addressLine2}</span>
    </div>
  );
}

function Stamp(props) {
  return (
      <img className="stamp" src="https://lorempixel.com/100/100/technics/Stamp/" alt="Stamp" />
  );
}

export default Envelope;

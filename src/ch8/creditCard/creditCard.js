import React from 'react';
import './creditCard.css';

function CreditCard({ cardInfo }) {
  const { firstName, lastName, number, securityCode, expDate } = cardInfo;
  const formatNumber = number
    .toString()
    .match(/.{1,4}/g)
    .join(' ');
  return (
    <div className="creditCard">
      <div className="number">{formatNumber}</div>
      <div className="securityCode">{securityCode}</div>
      <div className="expDate">
        <span>Valid </span>
        <span>Thru </span>
        {expDate}
      </div>
      <div className="cardholder">
        {firstName} {lastName}
      </div>
    </div>
  );
}

export const cardInfo = {
  firstName: 'John',
  lastName: 'Doe',
  number: 1234567887654321,
  securityCode: 123,
  expDate: '01/01',
};

export default CreditCard;

import React from 'react';
import './Card.css';

const Card = ({ title, children }) => (
  <div className="card">
    <h3 className="card-title">{title}</h3>
    <div className="card-body">{children}</div>
  </div>
);

export default Card;

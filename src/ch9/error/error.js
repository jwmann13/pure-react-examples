import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './error.css'

function ErrorBox({ children }) {
    return (
        <div className="alert alert-danger d-flex" role="alert">
            <FontAwesomeIcon icon={faExclamationTriangle} size="2x" />
            <span className="align-self-center m-auto">{children}</span>
        </div>
    );
}

export default ErrorBox;

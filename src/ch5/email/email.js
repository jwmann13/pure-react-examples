import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';

import './email.css';

function Email({ email }) {
    const { sender, subject, date, message } = email;
    const timeStr = moment(date).fromNow();
    return (
        <div className="email">
            <div className="read">
                <input type="checkbox" name="emailread" id="emailread" />
                <FontAwesomeIcon icon={faThumbtack} />
            </div>
            <div className="content">
                <div className="info">
                    <div className="sender">{sender}</div>
                    <div className="subject">{subject}</div>
                    <div className="date">{timeStr}</div>
                </div>
                <div className="message">{subject} - {message}</div>
            </div>
        </div>
    );
}

export default Email;

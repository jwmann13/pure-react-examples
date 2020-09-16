import React from 'react';
import PropTypes from 'prop-types';

export function Dialog({ children }) {
    return (
        <div
            className="modal"
            id="modalDialog"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="modalTitle"
            aria-hidden="false"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
}
Dialog.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
};

export function Body({ children }) {
    return (
        <div className="modal-body">
            <p>{children}</p>
        </div>
    );
}
Body.propTypes = {
    children: PropTypes.string.isRequired,
};

export function Title({ children }) {
    return (
        <div className="modal-header">
            <div className="modal-title" id="modalTitle">{children}</div>
        </div>
    );
}
Title.propTypes = {
    children: PropTypes.string.isRequired,
};

export function Footer({ children }) {
    return <div className="modal-footer">{children}</div>;
}
Footer.propTypes = {
    children: PropTypes.node,
};

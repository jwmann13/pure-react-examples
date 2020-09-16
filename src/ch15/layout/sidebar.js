import React from 'react';
import Button from '../button';

function Sidebar({ onHide, children }) {
    return (
        <div className={`sidebar col-md-3 collapse show`} id="sidebarCollapsable">
            {children}
            <Button onAction={onHide} variant="primary">Hide</Button>
        </div>
    );
}

export default Sidebar;
import React from 'react';

const DashboardIcon = ({...props}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none" {...props}>
            <path d="M14.5 19.5V12.5M10.5 12.5V5.5M5.5 12.5H19.5M5.5 19.5H19.5V5.5H5.5V19.5Z"
                  strokeWidth="1.2" stroke="currentColor"/>
        </svg>
    );
};

export default DashboardIcon;
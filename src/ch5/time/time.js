import React from "react";
import PropTypes from "prop-types";

import moment from "moment";

const Time = ({ time, format, utc, className, ...props }) => {
    let timeStr = utc ? moment.unix(time).fromNow() : moment(time).fromNow();
    if (format) timeStr = moment(time).format(format);
    return (
        <span className={`time ${className}`} {...props}>
            {timeStr}
        </span>
    );
};
Time.propTypes = {
    time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    utc: PropTypes.bool,
    format: PropTypes.string,
};

export default Time;

import React from "react";
import PropTypes from "prop-types";

import FileListItem from "./FileListItem";
import "./index.css";

function FileList({ files }) {
    return (
        <table className="table file-list">
            <tbody>
                {files.map((file) => (
                    <FileListItem key={file.id} file={file} />
                ))}
            </tbody>
        </table>
    );
}
FileList.propTypes = {
    files: PropTypes.array,
};

export default FileList;

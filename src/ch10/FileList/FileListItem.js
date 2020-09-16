import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFolder } from '@fortawesome/free-solid-svg-icons';

import Time from '../../time/time';

function FileListItem({ file }) {
    return (
        <tr className="file-list-item">
            <td className="file-icon">
                <FileIcon file={file} />
            </td>
            <td className="file-name">
                <FileName file={file} />
            </td>
            <td className="commit-message">
                <CommitMessage commit={file.latestCommit} />
            </td>
            <td className="time">
                <Time time={file.updated_at} />
            </td>
        </tr>
    );
}
FileListItem.propTypes = {
    file: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        latestCommit: PropTypes.object,
        updated_at: PropTypes.string,
    }).isRequired,
};

export const FileName = ({ file }) => <span>{file.name}</span>;
FileName.propTypes = {
    file: PropTypes.shape({
        name: PropTypes.string,
    }),
};

export const FileIcon = ({ file }) =>
    file.type === "dir" ? (
        <FontAwesomeIcon icon={faFolder} />
    ) : (
        <FontAwesomeIcon icon={faFile} />
    );
FileIcon.propTypes = {
    file: PropTypes.shape({
        type: PropTypes.oneOf(["file", "dir"]),
    }),
};

export const CommitMessage = ({ commit }) => <span>{commit.message}</span>;
CommitMessage.propTypes = {
    commit: PropTypes.shape({
        message: PropTypes.string,
    }),
};

export default FileListItem;

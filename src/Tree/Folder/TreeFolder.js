/**
 * Copyright 2021, IntraLinks, Inc, All rights reserved.
 *
 * Author: Vidyanand
 */

import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTreeContext } from '../State/TreeContext';
import ArrowDown from '../Assets/Icons_Arrows_Down.svg';
import ArrowRight from '../Assets/Icons_Arrows_Right.svg';
import FolderClosed from '../Assets/Icons_Folders_Folder.svg';
import FolderOpen from '../Assets/Icons_Folders_Open.svg';

import './tree_folder.scss';

const imgStyle = { height: 14, width: 16 };

const FolderView = ({ isOpen, name, handleClick }) => (
	<div className="folder-row">
		<img src={isOpen ? ArrowDown : ArrowRight} alt="IL" style={imgStyle} />
		&nbsp;&nbsp;
		<div className="dir-style" onClick={handleClick} role="button" tabIndex={0} onKeyDown={handleClick}>
			<img src={isOpen ? FolderOpen : FolderClosed} alt="IL" style={imgStyle} />
			&nbsp;&nbsp;
			{name}
		</div>
	</div>
);

const Folder = ({ id, name, children, node }) => {
	const { onNodeClick } = useTreeContext();
	const [isOpen, setIsOpen] = useState(false);
	const [childs, setChilds] = useState([]);

	useEffect(() => {
		setChilds([children]);
	}, [children]);

	const handleNodeClick = useCallback(
		(event) => {
			event.stopPropagation();
			onNodeClick({ ...node });
		},
		[node],
	);

	return (
		<div className="folder" id={id} onClick={handleNodeClick} role="button" tabIndex={0} onKeyDown={handleNodeClick}>
			<FolderView name={name} isOpen={isOpen} handleClick={() => setIsOpen(!isOpen)} />

			<div className="collapse" style={isOpen ? { maxHeight: '800px' } : { maxHeight: '0px' }} isOpen={isOpen}>
				{childs}
			</div>
		</div>
	);
};
Folder.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	children: PropTypes.string,
	node: PropTypes.string,
};
Folder.defaultProps = {
	id: '',
	name: '',
	children: '',
	node: '',
};
FolderView.propTypes = {
	isOpen: PropTypes.bool,
	name: PropTypes.string,
	handleClick: PropTypes.func.isRequired,
};
FolderView.defaultProps = {
	isOpen: false,
	name: '',
};
export { Folder, FolderView };

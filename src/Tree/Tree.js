/* eslint-disable no-param-reassign */
/**
 * Copyright 2021, IntraLinks, Inc, All rights reserved.
 *
 * Author: Vidyanand
 */
// eslint-disable-next-line no-param-reassign
import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { Folder } from './Folder/TreeFolder';
import { TreeContext } from './State';
import './tree.scss';

const RecusiveTree = ({ data, parentNode }) => {
	return data.map((item) => {
		item.parentNode = parentNode;
		if (!parentNode) {
			item.parentNode = data;
		}
		if (!item.id) item.id = v4();

		return (
			<Folder key={item.id} id={item.id} name={item.name} node={item}>
				<RecusiveTree parentNode={item} data={item.files} />
			</Folder>
		);
	});
};

const IlTree = ({ data, onNodeClick }) => {
	return (
		<TreeContext.Provider
			value={{
				onNodeClick: (node) => {
					onNodeClick(node);
				},
			}}
		>
			<div className="tree">
				<RecusiveTree data={data} parentNode={data} />
			</div>
		</TreeContext.Provider>
	);
};

IlTree.Folder = Folder;

IlTree.propTypes = {
	data: PropTypes.arrayOf(PropTypes.any),
	onNodeClick: PropTypes.func.isRequired,
};
IlTree.defaultProps = {
	data: [],
};
export default IlTree;

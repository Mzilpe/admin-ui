import React from "react";
import { useState } from "react";

const EditForm = (props) => {
	const { editData, setTableData, tableData, setEditData } = props;
	const [name, setName] = useState(editData[0].name);
	const [email, setEmail] = useState(editData[0].email);

	const nameChangeHandler = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};

	const onEmailChangeHandler = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	};

	const onSaveHandler = (event) => {
		event.preventDefault();

		const newData = editData[0];
		newData.name = name;
		newData.email = email;
		const updatedData = tableData.map((item) =>
			item.id !== newData.id ? item : newData
		);

		setTableData(updatedData);
		setEditData([]);
		setName("");
		setEmail("");
	};
	return (
		<form type='submit'>
			<label>Name </label>
			<input type='text' value={name} onChange={nameChangeHandler} />
			<label>Email </label>
			<input type='text' value={email} onChange={onEmailChangeHandler} />
			<button onClick={onSaveHandler}>Save</button>
		</form>
	);
};

export default EditForm;

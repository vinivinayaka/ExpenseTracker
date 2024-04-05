import React from 'react';
// import { Link } from 'react-router-dom';


const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: ₹{props.budget}</span>
		
			<button type='button' className='btn btn-primary ' onClick={props.handleEditClick}>
				Edit
			</button>
			{/* <Link to="/help " className='btn btn-primary' >Edit</Link> */}
		</>
	);
};

export default ViewBudget;

// Help.js
import React, { useState, useContext } from "react";
import { Button, Form } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import Navbar from './Navbar';
import Budget from './Budget';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AppContext } from '../context/AppContext';

const Help = () => {
    const { state, dispatch } = useContext(AppContext);
    const { startDate, endDate } = state;
    const [budget, setBudget] = useState();

    const handleBudgetChange = (e) => {
        setBudget(e.target.value);
    };

    const handleSubmit = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });
        alert('Budget set successfully');
    };

    return (
        <>
            <Navbar />
            <div className='container d-flex align-items-center justify-content-center'>
                <div className='card align-items-center my-5' style={{ width: "500px" }}>
                    <h2>Profile Setting</h2>
                    <Avatar src="/broken-image.jpg" className='align-self-center my-1' />
                    <div className='mx-5 my-2' style={{ width: "90%" }}>
                        <Budget />
                    </div>
                    <div className="row mt-1 mx-5">
                        <div className="col">
                            <DatePicker
                                selectsStart
                                selected={startDate}
                                onChange={date => dispatch({ type: 'SET_START_DATE', payload: date })}
                                startDate={startDate}
                                endDate={endDate}
                                dateFormat="dd MMM yyyy"
                                className="form-control"
                            />
                        </div>
                        <div className="col">
                            <DatePicker
                                selectsEnd
                                selected={endDate}
                                onChange={date => dispatch({ type: 'SET_END_DATE', payload: date })}
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                dateFormat="dd MMM yyyy"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div>
                        <Form.Group className="mb-3" controlId="budget">
                            <Form.Label><b>Monthly Budget</b></Form.Label>
                            <Form.Control type="number" value={budget} onChange={handleBudgetChange} placeholder="Enter your budget" />
                        </Form.Group>
                        <Button className='btn btn-primary my-3 mx-2' onClick={handleSubmit}>Submit</Button>
                        <Button className='btn btn-dark my-3' onClick={() => { alert('Feature Coming Soon') }}>Cancel</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Help;

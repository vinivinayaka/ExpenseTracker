// AddExpenseForm.jsx
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [category, setCategory] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!cost.trim()) {
      errors.cost = 'Cost is required';
      isValid = false;
    } else if (isNaN(cost)) {
      errors.cost = 'Cost must be a number';
      isValid = false;
    }

    if (!category) {
      errors.category = 'Category is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
      category,
      notes,
      date
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });

    setName('');
    setCost('');
    setCategory('');
    setNotes('');
    setDate('');
  };

  return (
    <>
    <Navbar />
    <div className="container-sm" style={{ width: "524px" }}>
      <h1 className="font-bold">Add a new expense</h1>
      <form onSubmit={onSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="cost" className="form-label">Cost</label>
          <InputGroup>
            <InputGroup.Text>₹</InputGroup.Text>
            <Form.Control type="number" placeholder="Enter Amount" value={cost} onChange={(e) => setCost(e.target.value)} />
          </InputGroup>
          {errors.cost && <div className="text-danger">{errors.cost}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
          </Form.Control>
          {errors.category && <div className="text-danger">{errors.category}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="notes" className="form-label">Notes</label>
          <Form.Control as="textarea" rows={3} placeholder="Add Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="d-flex justify-content-end">
          <Button variant="outline-secondary" type="button">Cancel</Button>
          <Button type="submit" className="mx-2">Save</Button>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddExpenseForm;

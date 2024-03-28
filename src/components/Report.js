import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Button, Table } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import Navbar from './Navbar';

const Report = () => {
  const { expenses, dispatch } = useContext(AppContext);

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };

  const headers = [
    { label: 'Date', key: 'date' },
    { label: 'Description', key: 'name' },
    { label: 'Amount', key: 'cost' }
  ];

  const exportToCSV = () => {
    const csvData = expenses.map(expense => ({
      date: expense.date,
      name: expense.name,
      cost: expense.cost
    }));

    return (
      <CSVLink data={csvData} headers={headers} filename={"expenses.csv"} className="btn btn-primary">
        Export to CSV
      </CSVLink>
    );
  };

  return (
    <div className="container mt-4">
          <Navbar />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <td>{expense.date}</td>
              <td>{expense.name}</td>
              <td>{expense.cost}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(expense.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {exportToCSV()}
    </div>
  );
};

export default Report;

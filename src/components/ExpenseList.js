import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import Graph from './Graph'; // Import ExpenseChart component

const ExpenseList = () => {
    // const { expenses } = useContext(AppContext);
    const { expenses, budget } = useContext(AppContext);
    const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

    const handleChange = (event) => {
        const searchResults = expenses.filter((filteredExpense) =>
            filteredExpense.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredExpenses(searchResults);
    };

    return (
        <div>
            <input
                type='text'
                className='form-control mb-2 mr-sm-2'
                placeholder='Type to search...'
                onChange={handleChange}
            />
         
            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    date={expense.date}
                    name={expense.name}
                    cost={expense.cost}
                />
            ))}
            <Graph expenses={expenses} budget={budget} />
        </div>
    );
};

export default ExpenseList;

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Alert from  './Alert';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);
	const remainingAmount = budget - totalExpenses;

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
	
		<div>
            <div className={`alert p-4 ${alertType}`}>
                <span>Remaining:₹{remainingAmount}</span>
            </div>
            {remainingAmount < 200 && (
                <Alert
                    alert={{
                        type: 'warning',
                        msg: 'Remaining amount is less than 200',
                    }}
                />
            )}
        </div>
	);
};

export default RemainingBudget;

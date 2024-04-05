  // Budget.js
  import React, { useState, useContext } from 'react';
  import ViewBudget from './ViewBudget';
  import EditBudget from './EditBudget';
  import { AppContext } from '../context/AppContext';



  const Budget = () => {
    const { state,budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);
    const { startDate, endDate } = state;

    const handleEditClick = () => {
      setIsEditing(true);
    };

    const handleSaveClick = (value) => {
      dispatch({
        type: 'SET_BUDGET',
        payload: value,
      });
      setIsEditing(false);
    };

    return (
      <>
      <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>

        {isEditing ? (
          <EditBudget handleSaveClick={handleSaveClick} budget={budget}
        
          />
        ) : (
          <>
            <ViewBudget handleEditClick={handleEditClick} budget={budget} />
            
            {/* Pass budget as a prop to the Graph component */}
          </>
        )}
      </div>
      <div className='alert alert-secondary d-flex align-items-center justify-content-between'>
                <span>{startDate && startDate.toDateString()}</span>
                <span>{endDate && endDate.toDateString()}</span>
            </div>
        
      </>
    );
  };

  export default Budget;

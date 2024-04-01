import React, { useState ,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import Navbar from './components/Navbar';
// import AddExpenseForm from './components/AddExpenseForm';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import RemainingBudget from './components/Remaining';
import { Link, Routes } from 'react-router-dom';
// import Graph from './components/Graph';
import Alert from './components/Alert';
    


const Content = () => {
    const [expenses, setExpenses] = useState([]);

    // const { expenses, budget } = useContext(AppContext);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      });
    };
  
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  

    return (
        <>
               {/* <Navbar /> */}
                
               <Alert alert={alert} />

            <div className='container'>
                <h1 className="text-4xl font-bold mb-3 mx-20 my-3">Good afternoon, Audrey</h1>
                <p className="text-xl mb-8">Here's what's happening with your money</p>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget expenses={expenses} />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal expenses={expenses} />
                    </div>
                </div>
                <Link className="align-self-end btn btn-md btn-dark" to='/Budgets'>AddExpense</Link>
                <h3 className='mt-3'>Expenses</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList expenses={expenses} />
                    </div>
                </div>
                
                {/* <div>
                    <Graph  />
                </div> */}
                {/* <h3 className='mt-3'>Add Expense</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AddExpenseForm addExpense={addExpense} />
                    </div>
                </div> */}
            </div>
        
        </>
    );
};

export default Content;

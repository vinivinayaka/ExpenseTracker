import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Button } from 'react-bootstrap';
import Navbar from './Navbar';

const Transactions = () => {
    const { expenses } = useContext(AppContext);

    const categoryLogos = {
        food: '/food_logo.svg',
        transport: '/uber_logo.svg',
        entertainment: '/netflix_logo.svg',
        shopping: '/amazon_logo.svg',
    };

    return (
        <div className="container-fluid h-100">
            <Navbar />
            <div className="row h-100">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/Dashboard" className="nav-link">📊 Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Transactions" className="nav-link active">💳 Transactions</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Budget" className="nav-link">💰 Budget</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Reports" className="nav-link">📈 Reports</Link>
                            </li>
                            <li className="nav-item nav-item-bottom">
                                <Link to="/profile" className="nav-link">👤 Profile</Link>
                            </li>
                            <li className="nav-item nav-item-bottom">
                                <Link to="/Settings" className="nav-link">⚙️ Settings</Link>
                            </li>
                            <li className="nav-item nav-item-bottom">
                                <Link to="/Help" className="nav-link">❓ Help</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <h1 className="mt-2">Transactions</h1>
                    {/* Buttons for filtering transactions */}
                    <div className="mb-4">
                        {/* Filter Buttons */}
                    </div>
                    {/* Display Transactions */}
                    {expenses.length > 0 ? (
                        <div>
                            {expenses.map(transaction => (
                                <TransactionItem
                                    key={transaction.id}
                                    name={transaction.name}
                                    date={transaction.date}
                                    amount={`₹ ${transaction.cost}`}
                                    imageSrc={categoryLogos[transaction.category]}
                                    alt={transaction.name}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>No transactions found.</p>
                    )}
                </main>
            </div>
        </div>
    );
};

const TransactionItem = ({ name, date, amount, imageSrc, alt }) => (
    <div className="card mb-2">
        <div className="card-body">
            <div className="row align-items-center">
                <div className="col-auto">
                    <img
                        alt={alt}
                        className="rounded-circle"
                        height="40"
                        src={imageSrc}
                    />
                </div>
                <div className="col">
                    <div className="font-weight-bold">{name}</div>
                    <div className="text-muted">{date}</div>
                </div>
                <div className="col-auto">
                    <div className="text-danger">{amount}</div>
                </div>
            </div>
        </div>
    </div>
);

export default Transactions;

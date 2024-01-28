import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AppRouter from './config/router';


function History() {
    const searchHistory = [
     
    ];

    return (
        <div>
            <h1>Search History</h1>
            <ul>
                {searchHistory.map((item, index) => (
                    <li key={index}>{item.username}</li>
                ))}
            </ul>
        </div>
    );
}

function App() {
  return (
    <div>
        <AppRouter />
    </div>
);
}

export default App;

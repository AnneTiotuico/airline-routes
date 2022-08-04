import React, { Component } from 'react';
import './App.css';
import data from './data'
import { getAirlineById } from './data';
import { getAirportByCode } from './data';

const { routes, airlines, airports } = data

const App = () => (
  
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <table>
      <thead>
        <tr>
          <th>Airline</th>
          <th>Source Airport</th>
          <th>Destination Airport</th>
        </tr>
      </thead>
      <tbody>
        {routes.map(route => 
          <tr key={route.airline + route.src + route.dest}>
            <td>{getAirlineById(route.airline).name}</td>
            <td>{getAirportByCode(route.src).name}</td>
            <td>{getAirportByCode(route.dest).name}</td>
          </tr>
        )}
      </tbody>
    </table>
  </section>
</div>
)

export default App;
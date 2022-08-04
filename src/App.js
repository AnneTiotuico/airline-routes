import React, { Component } from 'react';
import './App.css';
import data from './data'

const { routes, airlines, airports } = data

console.log(routes)

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
          <tr>
            <td>{route.airline}</td>
            <td>{route.src}</td>
            <td>{route.dest}</td>
          </tr>
        )}
      </tbody>
    </table>
  </section>
</div>
)

export default App;
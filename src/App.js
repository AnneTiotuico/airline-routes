import React from 'react';
import './App.css';
import data from './data'
import { getAirlineById } from './data';
import { getAirportByCode } from './data';
import Table from './components/Table'

const { routes } = data

const columns = [
  {name: 'Airline', property: 'airline'},
  {name: 'Source Airport', property: 'src'},
  {name: 'Destination Airport', property: 'dest'},
];

const formatValue = (property, value) => { 
  if (property === "airline") {
    return getAirlineById(value).name
  } else {
    return getAirportByCode(value).name
  }
}

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <Table 
    className="routes-table" 
    columns={columns} 
    rows={routes} 
    format={formatValue} 
    perPage={25}
  />
</div>
)

export default App;
import React, { useState } from 'react';
import './App.css';
import data from './data';
import { getAirlineById, getAirportByCode } from './data';
import Table from './components/Table';
import Select from './components/Select';

const App = () => { 
  const [airline, setAirline] = useState('all');
  const [airport, setAirport] = useState('all');

  const { airlines, airports, routes } = data;

  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];

  const formatValue = (property, value) => { 
    if (property === 'airline') {
      return getAirlineById(value).name;
    } else {
      return getAirportByCode(value).name;
    }
  }

  console.log(data)

  const selectedAirline = (value) => {
    if (value !== 'all') {
      value = parseInt(value, 10);
    }

    setAirline(value);
  }

  const filteredAirlines = airlines.filter((airline) => {
    return airline;
  });

  const filteredRoutes = routes.filter((route) => {
    /*
      - display all routes if airline && airport === all
      - else, display the routes that match the airline (code)
        && the src OR dest match the airport  
    */
    return (airline === "all" && airport === "all") || (route.airline === airline)
  });
  
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <Select 
        options={filteredAirlines}
        valueKey="id"
        titleKey="name"
        allTitle="All Airlines"
        value=""
        onSelect={selectedAirline}
      />
      <Table 
        className="routes-table" 
        columns={columns} 
        rows={filteredRoutes} 
        format={formatValue} 
        perPage={25}
      />
    </div>
  );
}

export default App;
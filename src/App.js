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

  const selectedAirport = (value) => {
    setAirport(value);
  }

  const filteredAirports = airports.filter((airport) => {
    return airport;
  });

  const filteredRoutes = routes.filter((route) => {
    return (airline === "all" || route.airline === airline) && (airport === "all" || route.src === airport || route.dest === airport) 
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
      <Select 
        options={filteredAirports}
        valueKey="id"
        titleKey="name"
        allTitle="All Airports"
        value=""
        onSelect={selectedAirport}
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
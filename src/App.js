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

  const selectedAirline = (value) => {
    if (value !== 'all') {
      value = parseInt(value, 10);
    }

    setAirline(value);
  }

  const selectedAirport = (value) => {
    setAirport(value);
  }

  const clearFilters = () => {
    setAirline('all');
    setAirport('all');
  }

  const defaultsSelected = airline === "all" && airport === "all";

  const filteredRoutes = routes.filter((route) => {
    return (airline === "all" || route.airline === airline) && (airport === "all" || route.src === airport || route.dest === airport) 
  });

  const filteredAirlines = airlines.map((airline) => {
    const disabled = !filteredRoutes.find((route) => {
      return route.airline === airline.id
    });

    let newAirlineObj = Object.assign({}, airline);
    newAirlineObj.disabled = disabled;
    return newAirlineObj;
  });

  const filteredAirports = airports.map((airport) => {
    const disabled = !filteredRoutes.find((route) => {
      return route.src === airport.code || route.dest === airport.code
    });

    let newAirportObj = Object.assign({}, airport);
    newAirportObj.disabled = disabled;
    return newAirportObj;
  });
  
  
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      Show routes on
      <Select 
        options={filteredAirlines}
        valueKey="id"
        titleKey="name"
        allTitle="All Airlines"
        value={airline}
        onSelect={selectedAirline}
      />
      flying in or out of
      <Select 
        options={filteredAirports}
        valueKey="code"
        titleKey="name"
        allTitle="All Airports"
        value={airport}
        onSelect={selectedAirport}
      />
      <button onClick={clearFilters} disabled={defaultsSelected}>
        Clear Filters
      </button>
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
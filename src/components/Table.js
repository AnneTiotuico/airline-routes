import React, { Component } from 'react';

const Table = ({ className, columns, rows, format }) => {

  return (
    <table className={className}>
      <thead>
        <tr>
          {columns.map(col => 
            <th key={col.property}>{col.name}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map(route => 
          <tr key={route.airline + route.src + route.dest}>
            <td>{format('airline', route.airline)}</td>
            <td>{format('route', route.src)}</td>
            <td>{format('route', route.dest)}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table
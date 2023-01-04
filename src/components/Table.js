import React, { useState } from 'react';

const Table = ({ className, columns, rows, format, perPage }) => {
  const [page, setPage] = useState(0);
  let startRoute = page * perPage;
  let endRoute = startRoute + perPage;
  const totalRoutes = rows.length;
  const currentRoutes = rows.slice(startRoute, endRoute);

  const handlePrevPage = () => {
    setPage(page - 1);
  }

  const handleNextPage = () => {
    setPage(page + 1);
  }

  return (
    <section>
      <table className={className}>
        <thead>
          <tr>
            {columns.map(col => 
              <th key={col.property}>{col.name}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {currentRoutes.map(route => 
            <tr key={route.airline + route.src + route.dest}>
              <td>{format('airline', route.airline)}</td>
              <td>{format('route', route.src)}</td>
              <td>{format('route', route.dest)}</td>
            </tr>
          )}
        </tbody>
      </table>
      <p>Showing {startRoute + 1}-{endRoute} of {totalRoutes} routes.</p>
      <button disabled={page === 0} onClick={handlePrevPage}>Previous Page</button>
      <button disabled={page === totalRoutes / perPage - 1} onClick={handleNextPage}>Next Page</button>
    </section>
  );
}

export default Table;
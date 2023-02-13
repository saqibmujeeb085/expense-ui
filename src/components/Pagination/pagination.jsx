import React from 'react';
import './pagination.css';

const Pagination = () => {
  return (
    <div className="pagination">
      <ul>
        <li>Prev</li>
        <li className="active">1</li>
        <li>2</li>
        <li>Next</li>
      </ul>
    </div>
  )
}

export default Pagination
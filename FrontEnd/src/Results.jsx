import React from "react";

const Results = ({ results }) => {
  return (
    <div className="results-container">
      <h2>Results</h2>
      {results.length > 0 ? (
        <ul className="results-list">
          {results.map((result, index) => (
            <li key={index} className="result-item">
              <strong>{result.title}</strong>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Results;

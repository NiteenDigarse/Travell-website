import React from 'react';
import PropTypes from 'prop-types';
import '../styles/searchResultList.css';

const SearchResultList = ({ results }) => {
  if (!results || results.length === 0) {
    return <div className="search-result-list empty">No results found.</div>;
  }

  return (
    <div className="search-result-list">
      {results.map((result, index) => (
        <div key={index} className="search-result-item">
          <h3 className="result-title">{result.title}</h3>
          <p className="result-description">{result.description}</p>
        </div>
      ))}
    </div>
  );
};

SearchResultList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  )
};

export default SearchResultList;

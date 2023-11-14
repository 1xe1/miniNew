import React, { useState, useEffect } from 'react';
import './show.css';
import { fetchAppleData } from '../../Api/AllApi';

const ShowData = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchAppleData().then((apiData) => {
      setData(apiData.articles);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="apple-data-container">
        {currentItems.map((article) => (
          <div key={article.title} className="card">
            <img src={article.urlToImage} alt={article.title} />
            <div className="card-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>

      {renderPagination()}
    </div>
  );
};

export default ShowData;

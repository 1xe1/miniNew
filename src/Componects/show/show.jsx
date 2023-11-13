import React, { useState, useEffect } from 'react';
import './show.css';
import { fetchAppleData } from '../../Api/AllApi';
// import { fetchTeslaData } from '../../Api/AllApi';
// import { fetchbusinessUSData } from '../../Api/AllApi';
// import { fetchTechCrunchData } from '../../Api/AllApi';
// import { fetchWallStreetData } from '../../Api/AllApi';

const ShowData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAppleData().then((apiData) => {
      setData(apiData.articles);
    });
  }, []);

  return (
    <div className="apple-data-container">
      {data.map((article) => (
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
  );
};

export default ShowData;


// import React, { useState, useEffect } from 'react';
// import './show.css';

// const ShowData = ({ data }) => {
//   const [displayedData, setDisplayedData] = useState([]);

//   useEffect(() => {
//     setDisplayedData(data);
//   }, [data]);

//   return (
//     <div className="apple-data-container">
//       {displayedData.map((article) => (
//         <div key={article.title} className="card">
//           <img src={article.urlToImage} alt={article.title} />
//           <div className="card-content">
//             <h3>{article.title}</h3>
//             <p>{article.description}</p>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               Read more
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ShowData;
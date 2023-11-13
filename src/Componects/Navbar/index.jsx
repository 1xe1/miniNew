// // Navbar.js

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/">/</Link>
//       <Link to="/Apple">
//         All articles mentioning Apple from yesterday, sorted by popular
//         publishers first.
//       </Link>
//       <Link to="/Tesla">
//         All articles about Tesla from the last month, sorted by recent first.
//       </Link>
//       <Link to="/US">Top business headlines in the US right now</Link>
//       <Link to="/contact">Contact</Link>
//       <Link to="/blog">Blog</Link>
//     </nav>
//   );
// };

// export default Navbar;


//Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {

  return (
    <div className="navbar">
      <h1>Apple New</h1>
      <h2>All articles mentioning Apple from yesterday, sorted by popular publishers first</h2>
    </div>
  );
};

export default Navbar;

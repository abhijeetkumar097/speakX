import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import Results from "./Results";
import Pagination from "./Pagination";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); // User's search input
  const [results, setResults] = useState([]);       // Fetched results
  const [page, setPage] = useState(1);              // Current page
  const [loading, setLoading] = useState(false);    // Loading state

  const fetchResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/search", {
        params: { searchTerm, page },
      });
      setResults(response.data); // Update results
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {

    const delayDebounceFn = setTimeout(() => {
      fetchResults(); 
    }, 300);

    return () => clearTimeout(delayDebounceFn); // Cleanup timeout on each searchTerm change
  }, [searchTerm]); // Trigger when searchTerm changes

  useEffect(() => {
    fetchResults(); 
  
  }, [page]);  // Trigger when page changes

  return (
    <>
    
    <div  className="app-title">
    <h1>Dynamic Search App</h1>
    <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    {/* {loading && <p className="loading">Loading...</p>} */}
    </div>
    <div className="app-container">
      <Results results={results} />
      <Pagination page={page} setPage={setPage} hasNextPage={results.length === 10} />
    </div>
    </>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";

const Result = () => {
  const RESULTS = [
    { id: 1, title: "CSC 420", grade: 'A'},
    { id: 2, title: "CSC 416", grade: 'A'},
    { id: 3, title: "CSC 419", grade: 'B'},
  ];
  return (
    <>
      <h1>My Results</h1>
      {RESULTS.map((result) => (
        <li key={result.id}>
          <Link to={`/result/${result.id}`}>{result.title}</Link>
        </li>
      ))}
    </>
  );
};

export default Result;
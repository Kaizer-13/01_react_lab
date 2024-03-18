// Home.js

import React from 'react';
import TextBoxList from './testBoxlist';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerStyle = {
    backgroundColor: '#f8f8f8',
    padding: '20px', 
  };

  const textBoxListStyle = {
    marginBottom: '20px', 
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '1.5em',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'inline-block', 
    marginTop: '10px', 
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to the Home Page</h1>


      <div style={textBoxListStyle}>
        <TextBoxList />
      </div>

   
      <Link to="/next-page" style={buttonStyle}>
        Go to Next Page
      </Link>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router';

class AboutPage extends React.Component {

  render() {
    return (
      <div>
        <h1> About</h1>
        <h4>This app uses lots of stuff. Things to discover:</h4>
        <p>
          <label>
            <ul>1. Pagination</ul>
            <ul>2. Handle 404's</ul>
            <ul>3. How can I add delete courses</ul>
          </label>
        </p>
        <Link to="home" className="btn btn-primary btn-sm">Return Home</Link>
      </div>
    );
  }
}

export default AboutPage;

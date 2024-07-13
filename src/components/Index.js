
import React from 'react';
import { Link } from 'react-router-dom';
import SearchComponent from './Common/SearchComponent';

const IndexPage = () => {
    return (
        <div className="index-page">
            <h2>Job Seeker Platform</h2>
            <SearchComponent placeholder="Search companies by name or industry" />
            <Link to="/login">Login</Link>
        </div>
    );
};

export default IndexPage;

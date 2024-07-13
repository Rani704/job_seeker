
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchComponent from './Common/SearchComponent';
import ListCard from './Common/ListCard';
import { fetchReferrals, fetchServices } from '../utils/api';

const CandidateHomePage = () => {
    const [referrals, setReferrals] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Fetch referrals and services when component mounts
        const fetchData = async () => {
            try {
                const referralData = await fetchReferrals();
                const serviceData = await fetchServices();
                setReferrals(referralData);
                setServices(serviceData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="candidate-home-page">
            <h2>Candidate Home</h2>
            <SearchComponent placeholder="Search by ID" />
            <div className="referrals-list">
                <h3>Referrals</h3>
                {referrals.map((referral) => (
                    <ListCard key={referral.id} data={referral} />
                ))}
            </div>
            <div className="services-list">
                <h3>Services</h3>
                {services.map((service) => (
                    <ListCard key={service.id} data={service} />
                ))}
            </div>
            <Link to="/login">Logout</Link>
        </div>
    );
};

export default CandidateHomePage;

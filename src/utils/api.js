
import axios from 'axios';

const BASE_URL = 'https://any-api.com/clever_com/clever_com'; // Replace with your actual API base URL

export const fetchReferrals = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/referrals`);
        return response.data; // Assuming API returns an array of referral data
    } catch (error) {
        console.error('Error fetching referrals:', error);
        throw error;
    }
};


export const fetchServices = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/services`);
        return response.data; // Assuming API returns an array of service data
    } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
    }
};

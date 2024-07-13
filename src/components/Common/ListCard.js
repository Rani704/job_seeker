
import React from 'react';

const ListCard = ({ data }) => {
    return (
        <div className="list-card">
            <p>{data.company || data.type}</p>
            <p>{data.jobTitle}</p>
            
        </div>
    );
};

export default ListCard;

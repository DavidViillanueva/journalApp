import React from 'react';

const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://pbs.twimg.com/profile_banners/2768311879/1508533275/1500x500)'
                }} 
            />

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un dia de mierda
                </p>
                <p className="journal__entry-content">
                    Me dejo mi nada
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
            
        </div>
    )
};

export default JournalEntry;

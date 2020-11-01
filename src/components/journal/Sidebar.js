import React from 'react';
import JournalEntries from './JournalEntries';

const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> David</span>
                </h3>

                <button className="btn btn-primary mt-5">
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <h3 className="mt-5">
                    New Entry
                </h3>
            </div>

            <JournalEntries />
        </aside>
    )
};

export default Sidebar;

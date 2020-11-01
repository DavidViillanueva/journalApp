import React from 'react';

const NotesAppBar = () => {
    return (
        <div className="notes__app-bar">
            <span> 29 agosto 2020</span>
            <div>
                <button className="btn btn-primary mr-5">
                    Picture
                </button>

                <button className="btn btn-primary">
                    Save
                </button>
            </div>
        </div>
    )
};

export default NotesAppBar;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploadFile } from '../../actions/notes';

const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );

    const handleSave = () => {
        dispatch( startSaveNote(active) );
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if ( file ) {
            dispatch( startUploadFile(file) );
        }
    }

    return (
        <div className="notes__app-bar">
            <span> 29 agosto 2020</span>
            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                onChange={ handleFileChange }
            />

            <div>
                <button 
                    className="btn btn-primary mr-5"
                    onClick= { handlePictureClick }
                >
                    Picture
                </button>

                <button 
                    className="btn btn-primary"
                    onClick = { handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
};

export default NotesAppBar;

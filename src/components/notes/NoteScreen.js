import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import useForm from '../../hooks/useForm';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note } = useSelector(state => state.notes );

    const [ formValues, handleInputChanges, reset ] = useForm( note );

    const { title, body } = formValues;

    const activeId = useRef( note.id );

    useEffect(() => {

        if( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id;
        }

    }, [ note, reset]);


    useEffect(() => {

        dispatch( activeNote( formValues.id , { ...formValues }));

    }, [ formValues, dispatch]);


    const handleDelete = () => {
        dispatch( startDeleting( activeId.current ) );
    }

    return (
        <div className="notes__main-content ">
            
            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Title note"
                    className="notes__title-input"
                    name="title"
                    autoComplete="off"
                    value = { title }
                    onChange = { handleInputChanges }
                />

                <textarea 
                    placeholder="What happened today?"
                    name="body"
                    className="notes__textarea"
                    value = { body }
                    onChange = { handleInputChanges }
                />

                {
                    (note.url) &&
                        <div className="notes__image">
                            <img 
                                src={ note.url }
                                alt="note"
                            />
                        </div>  
                }

            </div>

            <button
                className="btn btn-danger"
                onClick={ handleDelete }
            >
                Delete
            </button>

        </div>
    )
};

export default NoteScreen;

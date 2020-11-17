import React from 'react';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Title note"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea 
                    placeholder="What happened today?"
                    className="notes__textarea"
                />

                <div className="notes__image">
                    <img 
                        src="https://scontent.fnqn1-1.fna.fbcdn.net/v/t1.0-9/83077051_1031153540574303_3628107025533108224_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGc1hLAyn9AaDcXhaH8Mxv1pVXFiOPpIjOlVcWI4-kiM48NiMCVcxsAiTT_Sy2GZoNAhKSUGntm6RcB-59jSF1U&_nc_ohc=0p7M2NZjG1oAX-GYDyq&_nc_ht=scontent.fnqn1-1.fna&oh=9c9cd8d8eb17c0113fc564ca4b8b7775&oe=5FC0D99A"
                        alt="note"
                    />
                </div>  

            </div>

        </div>
    )
};

export default NoteScreen;

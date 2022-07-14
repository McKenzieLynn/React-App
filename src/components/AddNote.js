import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value); /* Updates the values with every keystroke on new notes */
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0) /* Ensures blanks can't be added as a note */ {
        handleAddNote(noteText);
        setNoteText(''); /* Resetting note */
        }
    }

    return (
        <div className="note new">
            <textarea 
                row='8' 
                cols='10'
                placeholder='Type to add note...'
                value={noteText} 
                onChange={handleChange}
            ></textarea>
            <div className='note-footer'>
                <small>200 Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;
const AddNote = () => {
    return (
        <div className="note new">
            <textarea 
                row='8' 
                cols='10'
                placeholder='Type to add note...'
            ></textarea>
            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="save">Save</button>
            </div>
        </div>
    );
};

export default AddNote;
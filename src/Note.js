import './Note.css'

function Note({name,del,id_note,content}){
    return(
        <div className='note_card' id={id_note}>
            <div className='Note_content'>
                <h1>{name}</h1>
                <p>{content}</p>
            </div>
            <button onClick={del}>del</button>
        </div>
    );
}

export default Note
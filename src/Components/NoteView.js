import Note from './Note';
import '../Styling/NoteView.css'

function NoteView({arr,del_butt}) {

    const notelist = arr.map(item => <Note key={item.id} id_note={item.id} name={item.text} del={del_butt} content={item.content}/>)

    return (
        <div className="note-view">
            {notelist}
        </div>
    );
}

export default NoteView;
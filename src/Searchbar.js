import { useState } from 'react';
import './searchBar.css'


function SearchBar({add,change_note,current_note,change_note_content,current_note_content}){

    return(
        <div id='search_bar'>
            <input type='text' placeholder="Title" onChange={change_note} value={current_note}></input>
            <input  className='content' type='text' placeholder="Content" onChange={change_note_content} value={current_note_content}></input>
            <button onClick={add}>+</button>

        </div>
    );
}

export default SearchBar;
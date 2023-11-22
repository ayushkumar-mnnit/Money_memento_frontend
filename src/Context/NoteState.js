import React, { useState } from "react";
import noteContext from './NoteContext';

const NoteState = (props) => {
    const host = 'https://servermmw.onrender.com';

    const notesInitial = [];
   

    const [notes, setNotes] = useState(notesInitial);

    // Get all Notes
    const getNotes = async () => {
        try {
            console.log(localStorage.authToken);
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.authToken}`,
                },
            });

            const json = await response.json();
            console.log(json);
            setNotes(json);
        } catch (error) {
            console.error(error.message);
        }
    };

    // Add a Note
    const addNote = async (username, name, inemail, phone, date) => {
        try {
            const response = await fetch(`${host}/api/notes/addnote`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.authToken}`,
                },
                body: JSON.stringify({ username, name, inemail, phone }),
            });

            const note = await response.json();
            console.log(note);
            setNotes([...notes, note]);
        } catch (error) {
            console.error(error.message);
        }
    };

    // Delete a Note
    const deleteNote = async (id) => {
        try {
            await fetch(`${host}/api/notes/deletenote/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.authToken}`,
                },
            });

            const newNotes = notes.filter((note) => note._id !== id);
            setNotes(newNotes);
        } catch (error) {
            console.error(error.message);
        }
    };

    // Edit a Note
    const editNote = async (id, username, name, inemail, phone) => {
        try {
            await fetch(`${host}/api/notes/updatenote/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.authToken}`,
                },
                body: JSON.stringify({ username, name, inemail, phone }),
            });

            const updatedNotes = notes.map((note) => {
                if (note._id === id) {
                    return {
                        ...note,
                        username,
                        name,
                        inemail,
                        phone,
                    };
                }
                return note;
            });

            setNotes(updatedNotes);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <noteContext.Provider
            value={{
                notes,
                setNotes,
                addNote,
                deleteNote,
                editNote,
                getNotes,
            }}
        >
            {props.children}
        </noteContext.Provider>
    );
};

export default NoteState;

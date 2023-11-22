
import React, { useContext, useEffect, useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AddNote from './AddNote';
import Noteitem from './Noteitem';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

import noteContext from './../Context/NoteContext';
import SearchBar from './SearchBar';



const Notes = (props) => {
  const navigate = useNavigate();
  console.log('Noteitem props:', props);
  const context = useContext(noteContext)
  const { notes, getNotes, editNote } = context;
 

  useEffect(() => {
    if(localStorage.getItem('authToken')){
       console.log("hii")
      getNotes();
    }
    else{
      navigate("/login");;
    }
    // eslint-disable-next-line
  }, [])
 



  const [note,setNote] = useState({id:"",eusername:"", ename:"",einemail:"",ephone:""});

  const [isOpen, setIsOpen] = useState(false);

  const updateNote = (currentNote) => {
   
    setNote({id:currentNote._id, eusername: currentNote.username, ename: currentNote.name , einemail : currentNote.inemail, ephone: currentNote.phone});
    setIsOpen(true);
  }
  const handleClose = () => {
    setIsOpen(false);
  }

  
  const handleClick = (e) => {
    editNote(note.id, note.eusername, note.ename, note.einemail, note.ephone);
    handleClose();
    props.showAlert("Updated Successfully", "success");
  }

const onChange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
}
const [searchInpute, setSearchInpute] = useState('');
const [searchInputd, setSearchInputd] = useState('');

const handleSearche = (searchTerm) => {
  setSearchInpute(searchTerm);
};

const handleSearchd = (searchTerm) => {
  setSearchInputd(searchTerm);
};
const filteredNotes = notes.filter((note) => {
  const matchSearch = note.username && note.username.toLowerCase().includes(searchInpute.toLowerCase());
  const matchDate = note.date && (searchInputd ? note.date.includes(searchInputd) : true);
  return matchSearch && matchDate;
});




  return (
    <>
      <AddNote showAlert={props.showAlert} />
      

   
     
      <Modal 
      className='model'
    
      isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent
       >
          <ModalHeader
          className='heading'>Update Note</ModalHeader>
          <ModalCloseButton 
          />
          <ModalBody
          className='modelbody'>
              <form
              className='formupdate'>
                
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Update Expenses</label>
                  <input type="text" className="form-control" id="eusername" name='eusername' aria-describedby="emailHelp" value={note.eusername} onChange={onChange} minLength={5} required  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Update Extra Note</label>
                  <input type="text" className="form-control" id="ename" name='ename' value={note.ename} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="inemail" className="form-label"> Update Information about Bill</label>
                  <input type="text" className="form-control" id="einemail" name='einemail' value={note.einemail} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Update prices</label>
                  <input type="text" className="form-control" id="ephone" name='ephone' value={note.ephone} onChange={onChange} minLength={5} required />
                </div>
              </form>
              </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Update Note
            </Button>
            <Button onClick={handleClose}>
              Cancel
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
           

    

      <div className="row my-3">
      
        <div className="container mx-2 px-5">
       
        </div>
        
        <SearchBar handleSearche={handleSearche} handleSearchd={handleSearchd} />
        {filteredNotes.sort((a,b) => new Date(b.date) - new Date(a.date)).map((note,_id) => {
  return <Noteitem key={_id} updateNote={updateNote} note={note} showAlert={props.showAlert} />
})}
  
  


      </div>
   
      
      

       
      
   
    </>
  )
}

export default Notes


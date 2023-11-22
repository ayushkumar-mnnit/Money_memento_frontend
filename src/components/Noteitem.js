import React, { useContext, useRef, useEffect } from 'react';
import './Noteitem.css';
import noteContext from './../Context/NoteContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  const pdfRef = useRef(null); // Create a ref for the table

  const excludeButtonFromPDF = () => {
    const button = pdfRef.current?.querySelector('.button');
    if (button) {
      button.style.display = 'none'; // Hide the download button
    }
  };

  const downloadPdf = () => {
    excludeButtonFromPDF(); // Hide the button before capturing the content

    const input = pdfRef.current;
if (!input) {
  return <div>Wait user we are creating your Transaction Report </div>;
}

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('Receipt.pdf');

      // After generating the PDF, show the button (optional)
      const button = pdfRef.current?.querySelector('.button');
      if (button) {
        button.style.display = 'block';
      }
    });
  };

  return (
    <>
      <div className="table-responsive" ref={pdfRef}> {/* Assign the ref to the table container */}
     
        <table className="table">
          <thead>
            <tr className="bg-warning">
              <th>Expenses</th>
              <th>Prices</th>
              <th>Add info</th>
              <th>Bill Info</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-info">
              <td>{note.username}</td>
              <td>{note.phone}</td>
              <td>{note.name}</td>
              <td>{note.inemail}</td>
              <td>{new Date(note.date).toLocaleDateString()}</td>
              <td>
                <button
                  className="button-56"
                  onClick={() => {
                    updateNote(note);
                    props.showAlert('Updated Successfully', 'success');
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="button-56"
                  onClick={() => {
                    deleteNote(note._id);
                    props.showAlert('Deleted Successfully', 'success');
                  }}
                >
                  Delete
                </button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
   
      <button className='button-56' onClick={downloadPdf}>Get PDF</button>
    </>
  );
};

export default Noteitem;

import React, { useContext, useEffect, useRef } from 'react';
import noteContext from './../../Context/NoteContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Recipt.css';
import Piechart from './../Chart/Piechart';

const Recipt = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  const pdfref = useRef(null);

  // Function to format the date to "dd month yyyy" format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const excludeButtonFromPDF = () => {
    const button = pdfref.current?.querySelector('.button');
    if (button) {
      button.style.display = 'none'; // Hide the download button
    }
  };

  const downloadpdf = () => {
    excludeButtonFromPDF(); // Hide the button before capturing the content

    const input = pdfref.current;
    if (!input) return;
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
      const button = pdfref.current?.querySelector('.button');
      if (button) {
        button.style.display = 'block';
      }
    });
  };

  useEffect(() => {
    // Fetch notes when the component mounts
    getNotes();
  }, [getNotes]);

  return (
    <div className="invoice-container" ref={pdfref}>
      <h1 className='recipant'>Invoice</h1>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Expenses</th>
            <th>Bill</th>
            <th>Prices</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {notes.map((note) => (
            <tr key={note._id}>
              <td>{formatDate(note.date)}</td>
              <td>{note.username}</td>
              <td>{note.inemail}</td>
              <td>{note.phone}</td>
            </tr>
          ))}
        </tbody>
       
      </table>
      {/* The button is excluded from PDF generation */}
      <button className="button" onClick={downloadpdf}>
        Download invoice
      </button>
    </div>
  );
};

export default Recipt;

import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {

  const onDocumentLoadSuccess = () => {}
  
  return (
    <section id='resume'>
      <h2 className='section-header'>RESUME</h2>
      <h1 className='section-subheader'>MY RESUME</h1>
      <div className='section-body'>
        <Document
          file={resume}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          <Page pageNumber={1} className='resume' />
        </Document>
      </div>
    </section>
  )
}

export default Resume
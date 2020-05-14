import React, { Component } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { Container } from 'reactstrap';

import pdf from '../Resume/IssoufKiema_Resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Resume extends Component {
    state = {
        numPages: null,
    }

    onDocumentLoadSuccess = (document) => {
        const { numPages } = document;
        this.setState({
            numPages,
        });
    };

    render() {
        const { numPages } = this.state;
        return (
            <Container className="resume-container mb-5">
                <h1 className="text-success mt-3">Resume</h1>

                <Document
                    className="mt-3"
                    file={pdf}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    onLoadError={console.error}
                >
                    {Array.from(
                        new Array(numPages),
                        (el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                width={1000}
                            />
                        ),
                    )}
                </Document>
            </Container>
        );
    }
}
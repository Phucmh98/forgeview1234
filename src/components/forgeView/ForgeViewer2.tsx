'use client'
import { startViewer, loadDocument, loadDocumentNode } from './forgeviewaction'


import React, { useEffect, useRef } from 'react';

interface ForgeViewerProps {
    urn: string;
    token: string;
    id: string;
}

export const ForgeViewer2 = ({ urn, token, id }: ForgeViewerProps) => {


    useEffect(() => {
        startViewer(token, id)
        loadDocument(urn, id, null)
        // loadDocumentNode(null,id)


    }, [urn, token, id]);

    return (
        // <div ref={viewerDiv} style={{ width: '100%', height: '100vh' }}>
        // </div>
        <div className='h-full w-full relative'>
            <div className='h-full w-full absolute'>
                <div id={id}></div>
            </div>
        </div>
    );
};



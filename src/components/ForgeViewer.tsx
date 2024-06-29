'use client'

import useForgeStore from '@/redux/store';
import { forgeViewer, resizeViewer } from '@/utils/forgeviewaction';
import React, { useEffect, useRef } from 'react';

interface ForgeViewerProps {
    urn: string;
    token: string;
    id: string;
    action: string
}

let viewerLoc: { [key: string]: any } = {};


const ForgeViewer: React.FC<ForgeViewerProps> = ({ urn, token, id, action }) => {

    // let viewerLoc:any
    useEffect(() => {
        if (action === 'a123' || action === '') {

            let viewer: any
            const options = {
                env: 'AutodeskProduction',
                getAccessToken: (onSuccess: (accessToken: string, expire: number) => void) => {
                    onSuccess(token, 3600); // Adjust the token expiry time as needed
                }
            };

            const initializeViewer = async () => {
                try {
                    await new Promise<void>((resolve, reject) => {
                        //@ts-ignore
                        Autodesk.Viewing.Initializer(options, () => {
                            const viewerElement = document.getElementById(id);
                            if (viewerElement) {
                                //@ts-ignore
                                const viewerAuto = new Autodesk.Viewing.GuiViewer3D(viewerElement);
                                viewer = viewerAuto;
                                viewer.start();
                                //@ts-ignore
                                Autodesk.Viewing.Document.load(`urn:${urn}`, (doc: any) => {
                                    viewerLoc[id] = doc
                                    const defaultModel = doc.getRoot().getDefaultGeometry();
                                    viewer.loadDocumentNode(doc, defaultModel);

                                    resolve(); // Resolve the promise when viewer initialization is complete
                                }, (errorCode: any, errorMsg: any) => {
                                    console.error(errorCode, errorMsg);
                                    reject(errorMsg); // Reject the promise on error
                                });
                            } else {
                                console.error(`Element with id '${id}' not found.`);
                                reject(`Element with id '${id}' not found.`);
                            }
                        });
                    });

                } catch (error) {
                    console.error("Error initializing viewer:", error);
                }
            };


            initializeViewer();
        }

        console.log('chạy lạis')
    }, [urn, token, id, action]);




    const resize = () => {

        // viewerLoc[id].resize();

        console.log('11111111111')
    }

    return (

        <div className='w-full h-full relative'>
            <div className='w-full h-full absolute z-0'>
                <div className='' id={id}></div>
            </div>
        </div>


    );
};

export default ForgeViewer;

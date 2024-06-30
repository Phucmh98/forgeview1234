'use client'

import React, { useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import * as THREE from 'three';
interface ForgeViewerProps {
    urn: string;
    token: string;
    id: string;

}


const ForgeViewer = forwardRef((props: ForgeViewerProps, ref) => {
    const { urn, token, id } = props;
    const viewerRef = useRef<any>(null);

    useEffect(() => {

        const options = {
            env: 'AutodeskProduction',
            getAccessToken: (onSuccess: (accessToken: string, expire: number) => void) => {
                onSuccess(token, 3600);
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
                            const viewer = new Autodesk.Viewing.GuiViewer3D(viewerElement);
                            viewerRef.current = viewer; // Store the viewer instance in the ref
                            viewer.start();
                            //@ts-ignore
                            Autodesk.Viewing.Document.load(`urn:${urn}`, (doc: any) => {

                                const defaultModel = doc.getRoot().getDefaultGeometry();
                                viewer.loadDocumentNode(doc, defaultModel);
                                resolve();
                            }, (errorCode: any, errorMsg: any) => {
                                console.error(errorCode, errorMsg);
                                reject(errorMsg);
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

    }, [urn, token, id]);

    useImperativeHandle(ref, () => ({
        resize: resizeViewer,
        zoomTo: zoomToViewer,
        isolate: isolateViewer,
        show: showViewer,
        showAll: showAllViewer,
        hideAll: hideAllViewer,
        selectObjs: selectsViewer,
        isLoadDone: isLoadDoneViewer,
        setThemingColor: setThemingColorViewer,
        clearThemingColors: clearThemingColorsViewer
    }));


    //Resize Forge
    const resizeViewer = () => {
        if (viewerRef.current) {
            viewerRef.current.resize();
            console.log(`Resize ${id} called`);
        }
    };
    //ZoomTo Forge
    const zoomToViewer = (objIds: number[]) => {
        if (viewerRef.current) {
            viewerRef.current.fitToView(objIds, viewerRef.current.model)
        }
    }
    //Isolate Forge
    const isolateViewer = (objIds: number[]) => {
        if (viewerRef.current) {
            viewerRef.current.isolate(objIds, viewerRef.current.model)
            viewerRef.current.impl.visibilityManager.setNodeOff(objIds, true);
        }
    }

    //Show Forge
    const showViewer = (objIds: number[]) => {
        if (viewerRef.current) {
            viewerRef.current.isolate(objIds, viewerRef.current.model)
        }
    }

    //Show All Forge
    const showAllViewer = () => {
        if (viewerRef.current) {
            viewerRef.current.showAll()
        }
    }


    //Hilde All Forge
    const hideAllViewer = () => {
        if (viewerRef.current) {
            viewerRef.current.hideAll()
        }
    }

    //Selects Forge
    const selectsViewer = (objIds: number[]) => {
        if (viewerRef.current) {
            viewerRef.current.select(objIds)

        }
    }

    //LoadDone Forge
    const isLoadDoneViewer = () => {
        if (viewerRef.current) {
            console.log(`viewerRef  ${id}`, viewerRef.current.isLoadDone())
            return viewerRef.current.isLoadDone();
        }
        return false;
    }

    //SetThemingColor Forge
    // const setThemingColorViewer = (objIds: number[], color: THREE.Vector4, children: boolean) => {
    //     if (viewerRef.current) {
    //         objIds.forEach(objId => {
    //             var green = new THREE.Vector4(0, 0.5, 0, 0.5);
    //             viewerRef.current.setThemingColor(objId, green);
    //         });
    //     }
    // };
    const setThemingColorViewer = (objs: number[], red: any, green: any, blue: any, alpha: any, isSetForChildren: boolean) => {

        for (let i = 0; i < objs.length; i++) {
            var color = new THREE.Color(red, green, blue);
            console.log('color', color)
            viewerRef.current.setThemingColor(objs[i], color, viewerRef.current.model, isSetForChildren);
        }
    }

    //Clear Theming Colors
    const clearThemingColorsViewer = () => {
        if (viewerRef.current) {
            viewerRef.current.clearThemingColors(viewerRef.current.model)
        }
    }

    return (
        <div className='w-full h-full relative'>
            <div className='w-full h-full absolute z-0'>
                <div id={id}></div>
            </div>
        </div>
    );
});

export default ForgeViewer;

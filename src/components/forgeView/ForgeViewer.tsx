'use client'

import React, { useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
// import * as THREE from 'three';
interface ForgeViewerProps {
    urn: string;
    token: string;
    id: string;
    onSelection: (data: any) => void;
}
const ForgeViewer = forwardRef((props: ForgeViewerProps, ref) => {
    const { urn, token, id, onSelection } = props;
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
                            viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, onSelectionViewer)
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
        clearThemingColors: clearThemingColorsViewer,

    }));


    const onSelectionViewer = (data: any) => {
        
        if (data.dbIdArray.length > 0) {
            onSelection(data)
        }
    }
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




    const setThemingColorViewer = (objs: number[], red: number, green: number, blue: number, alpha: number, isSetForChildren: boolean) => {
        for (let i = 0; i < objs.length; i++) {
            // @ts-ignore
            const color = new THREE.Vector4(red, green, blue, alpha);
            viewerRef.current.setThemingColor(objs[i], color, null, isSetForChildren);
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

export default React.memo(ForgeViewer);



interface ForgeViewerProps {
    urn: string;
    token: string;
    id: string;
    setViewerLoc:Function
}

export const forgeViewer = ({ token, urn, id,setViewerLoc }: ForgeViewerProps) => {
    let viewer: any;
    const options = {
        env: 'AutodeskProduction',
        getAccessToken: (onSuccess: (accessToken: string, expire: number) => void) => {
            onSuccess(token, 3600); // Adjust the token expiry time as needed
        }
    };

    // const initializeViewer = () => {
        // return new Promise<void>((resolve, reject) => {
            //@ts-ignore
            Autodesk.Viewing.Initializer(options, () => {
                const viewerElement = document.getElementById(id);
                if (viewerElement) {
                    //@ts-ignore
                    const viewerAuto = new Autodesk.Viewing.GuiViewer3D(viewerElement);
                    viewer = viewerAuto;
                    console.log("🚀 ~ Autodesk.Viewing.Initializer ~ viewer:", viewer)
                    setViewerLoc(viewer)
                    // viewerLoc[id] = viewer;

                    viewer.start();
                    viewer.resize()
                    //@ts-ignore
                    Autodesk.Viewing.Document.load(`urn:${urn}`, (doc: any) => {
                        const defaultModel = doc.getRoot().getDefaultGeometry();
                        viewer.loadDocumentNode(doc, defaultModel);
                        // resolve(); // Resolve the promise when viewer initialization is complete
                    }, (errorCode: any, errorMsg: any) => {
                        console.error(errorCode, errorMsg);
                        // reject(errorMsg); // Reject the promise on error
                    });
                } else {
                    console.error(`Element with id '${id}' not found.`);
                    // reject(`Element with id '${id}' not found.`);
                }
            });
        }
    // );
    // };

    // return initializeViewer().then(() => viewer);
// };



// export const forgeViewer = ({ token, urn, id }: ForgeViewerProps) => {
//     let viewer: any
//     const options = {
//         env: 'AutodeskProduction',
//         getAccessToken: (onSuccess: (accessToken: string, expire: number) => void) => {
//             onSuccess(token, 3600); // Adjust the token expiry time as needed
//         }
//     };

//     //@ts-ignore
//     Autodesk.Viewing.Initializer(options, () => {

//         const viewerElement = document.getElementById(id);
//         if (viewerElement) {
//             //@ts-ignore
//             const viewerAuto = new Autodesk.Viewing.GuiViewer3D(viewerElement);
//             viewer = viewerAuto

//             viewerLoc[id] = viewer

//             viewer.start();
//             //@ts-ignore
//             Autodesk.Viewing.Document.load(`urn:${urn}`, (doc: any) => {
//                 // console.log('doctest', doc);
//                 const defaultModel = doc.getRoot().getDefaultGeometry();
//                 viewer.loadDocumentNode(doc, defaultModel);
//             }, (errorCode: any, errorMsg: any) => {
//                 console.error(errorCode, errorMsg);
//             });
//         } else {
//             console.error(`Element with id '${id}' not found.`);
//         }
//     });

//     return viewer;

// }


// export function resizeViewer(loc: string) {

//     return viewerLoc[loc].resize()
// }


export function resizeViewer(loc: any) {
    
    // return loc.resize()
}

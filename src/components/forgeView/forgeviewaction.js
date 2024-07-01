const viewer = {}
const viewerDoc = {}
const snapper = {}

export function startViewer(token, loc, callbackClass) {
    const options = {
        env: 'AutodeskProduction',
        // api: 'streamingV2',
        accessToken: token,
        location: loc,
    }

    Autodesk.Viewing.Initializer(options, function onInitialized() {
        const viewerElement = document.getElementById(options.location)
        if (!viewerElement) {
            console.error(`Viewer element with id '${options.location}' not found.`)
            return
        }

        viewer[loc] = new Autodesk.Viewing.GuiViewer3D(viewerElement)
        viewer[loc].start()

        viewer[loc].addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT)


    })
}

export function loadDocument(urn, loc,viewableId) {
   

        const paramUrn = !urn.startsWith('urn:') ? `urn:${urn}` : urn

        Autodesk.Viewing.Document.load(
            paramUrn,
            (doc) => {
                console.log('doc', doc)
                viewerDoc[loc] = doc
                console.log('viewerDoc[loc]', viewerDoc[loc])
                // let viewables = viewerDoc[loc].getRoot().getDefaultGeometry()
                // console.log("🚀 ~ returnnewPromise ~ viewables:", viewables)

                let viewables
                if (viewableId) {
                    viewables = doc.getRoot().findByGuid(viewableId)


                } else {
                    viewables = doc.getRoot().getDefaultGeometry()

                }

                viewer[loc].loadDocumentNode(doc, viewables)
          
            }
            
        )


    }


export async function loadDocumentNode(viewableId, loc) {
    console.log('viewerDoc[123123123213]', viewerDoc[loc])

    let viewables
    if (viewableId) {
        viewables = viewerDoc[loc].getRoot().findByGuid(viewableId)


    } else {
        viewables = viewerDoc[loc].getRoot().getDefaultGeometry()

    }

    await viewer[loc].loadDocumentNode(viewerDoc[loc], viewables)
}

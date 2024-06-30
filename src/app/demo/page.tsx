'use client'
// import ForgeViewer from '@/components/ForgeViewer'
import ForgeViewer from '@/components/ForgeViewer'
import { ForgeViewer2 } from '@/components/ForgeViewer2'
import useForgeStore from '@/redux/store'
import useSimpleStore2 from '@/redux/storeForgeView'
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three';



function page() {
  // const viewLocs = useForgeStore((state) => state.viewerLoc);
  const viewerRef1 = useRef<any>(null);
  const viewerRef2 = useRef<any>(null);
  const urn = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bHV3cmRzN3I2cmEza3BkZHN3aHo4ZGNkZ2hvY2t5amRzY3ZoemRheWpodHF6YjJwLWJhc2ljLWFwcC9TdGFuZm9yZF9QTDAxX3Y1LnJ2dA'

  const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY0RE9XMnJoOE9tbjNpdk1NU0xlNGQ2VHEwUV9SUzI1NiIsInBpLmF0bSI6ImFzc2MifQ.eyJzY29wZSI6WyJ2aWV3YWJsZXM6cmVhZCJdLCJjbGllbnRfaWQiOiJMVVdSRHM3UjZSQTNrUGREU1doejhEQ0RHaE9ja1lqZFNjVkhaZEF5akhUcXpCMlAiLCJpc3MiOiJodHRwczovL2RldmVsb3Blci5hcGkuYXV0b2Rlc2suY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20iLCJqdGkiOiJrRGFoamJ0VlJsRkFRcWk5WUxqUHZ4ZkQ1ajdJcFlXZFBaMTNlSW9xeWNBRkZzWVZEUmt3STlyS2hVNFN6ZzdWIiwiZXhwIjoxNzE5NzU4NzcxfQ.TTziJ8X9hcCD8JkP3g4Z_iVh5mmWTfnxsUdk-GXnEUcZGFwWXd-B9RwCftvZp9iuh3YyfWADXAmd7FPvOa_-o0Xv2bSwueiKCYvd992xHTFy2vKoP35FLW-A-kWrOwiKGirB1wrdxeBZVmufhpSGD9rYF1G5HxPd8MhJy2yBpDytURZlu4VwSgWQTafBmxik_saC0AE7KEFugMeGe7M_AfdwCkxsTDSVUIUmdf0_2pn5RG-FkAQqFfDMbae-pCkO6FfARRHWBDY4TLUQtbX5BHG16EoNzhReC7Jkp_QQsSj86MT1OJYjOhh5g7BsH0343_TXBJtJ4Hqq7NSB53qNmg'
  const idView1 = 'view1'
  const idView2 = 'view2'

  const objIds = [5353, 5356, 5370, 5379, 5380]
  const objIdColors = [5353, 5356, 5370, 5379, 5380, 5382, 5387, 5388, 5409, 5410, 5415, 1399645, 1399646, 1399657, 1399658, 1401781]
  const [action, setAction] = useState('')



  useEffect(() => {

  }, []);

  function topContent(): JSX.Element {
    return (

      <div className='grid grid-cols-2 gap-1 h-full' >
        <ForgeViewer token={token} urn={urn} id={idView1} ref={viewerRef1} />
        <ForgeViewer token={token} urn={urn} id={idView2} ref={viewerRef2} />
      </div>

    )
  }

  function bottomContent(): JSX.Element {
    return (
      <div className='w-full h-full'>
        <button className='bg-sky-500 mx-1 px-1' onClick={() => {
          // resizeFirstPaneDiv()
          // console.log('viewLocs',viewLocs)
          viewerRef1.current.resize();
          viewerRef2.current.resize();
        }}>Resize</button>

        <button className='bg-red-400 mx-1 px-1' onClick={() => {
          // console.log('viewLocs',viewLocs)
          viewerRef1.current.zoomTo(objIds);
          viewerRef2.current.zoomTo(objIds);
        }}>Zoom To</button>

        <button className='bg-amber-600 mx-1 px-1' onClick={() => {
          // console.log('viewLocs',viewLocs)
          viewerRef1.current.isolate(objIds);
          viewerRef2.current.isolate(objIds);
        }}>Isolate</button>

        <button className='bg-emerald-400 mx-1 px-1' onClick={() => {
          // console.log('viewLocs',viewLocs)
          viewerRef1.current.show(objIds);
          viewerRef2.current.show(objIds);
        }}>Show</button>

        <button className='bg-lime-500 mx-1 px-1' onClick={() => {
          // console.log('viewLocs',viewLocs)
          viewerRef1.current.showAll();
          viewerRef2.current.showAll();
        }}>Show All</button>

        <button className='bg-lime-800 mx-1 px-1' onClick={() => {
          // console.log('viewLocs',viewLocs)
          viewerRef1.current.hideAll();
          viewerRef2.current.hideAll();
        }}>Hide All</button>

        <button className='bg-teal-500 mx-1 px-1' onClick={() => {
          // console.log('viewLocs',viewLocs)
          viewerRef1.current.selectObjs(objIds);
          viewerRef2.current.selectObjs(objIds);
        }}>Select Objs</button>


        <button className='bg-indigo-600 mx-1 px-1' onClick={() => {
          // console.log('viewLocs',viewLocs)
          viewerRef1.current.isLoadDone(objIds);
          viewerRef2.current.isLoadDone(objIds);
        }}>Check Done</button>

        {/* <button className='bg-purple-500 mx-1 px-1' onClick={() => {
          const color = new THREE.Vector4(255, 0, 64, 0.5);
          const isSetForChildren = true;
          viewerRef1.current.setThemingColor(objIdColors, color, isSetForChildren);
          viewerRef2.current.setThemingColor(objIdColors, color, isSetForChildren);
        }}>Set Color</button> */}
        <button className='bg-purple-500 mx-1 px-1' onClick={() => {
          const isSetForChildren = true;
          viewerRef1.current.setThemingColor(objIdColors, 1, 1, 1, 0.5, isSetForChildren);
          viewerRef2.current.setThemingColor(objIdColors, 1, 1, 1, 0.5, isSetForChildren);
        }}>Set Color</button>


        <button className='bg-fuchsia-500 mx-1 px-1' onClick={() => {

          viewerRef1.current.clearThemingColors();
          viewerRef2.current.clearThemingColors();
        }}>Clear Color</button>




      </div>
    )
  }

  const handleResize = () => {
    // resizeFirstPaneDiv()
    // console.log('viewLocs',viewLocs)
    viewerRef1.current.resize();
    viewerRef2.current.resize();


  }

  return (

    <SplitterComponent id="splitter" height="100%" width='100%' orientation={'Vertical'} resizeStop={handleResize}>
      <PanesDirective>
        <PaneDirective size='70%' content={topContent} />
        <PaneDirective size='30%' content={bottomContent} />
      </PanesDirective>
    </SplitterComponent>


    // <div className='grid grid-cols-2 gap-1 h-full' >
    //   <ForgeViewer token={token} urn={urn} id={idView1} />
    //   <ForgeViewer token={token} urn={urn} id={idView2} />
    // </div>
    // <ForgeViewer2 token={token} urn={urn} id={idView} />
  )
}

export default page
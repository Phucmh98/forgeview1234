'use client'
// import ForgeViewer from '@/components/ForgeViewer'
import ForgeViewer from '@/components/forgeView/ForgeViewer'
import DataDisplay from '@/components/forgeView/component/dataDisplay';

import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'


function page() {

  const viewerRef1 = useRef<any>(null);
  const viewerRef2 = useRef<any>(null);

  const urn = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bHV3cmRzN3I2cmEza3BkZHN3aHo4ZGNkZ2hvY2t5amRzY3ZoemRheWpodHF6YjJwLWJhc2ljLWFwcC9TdGFuZm9yZF9QTDAxX3Y1LnJ2dA'

  const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY0RE9XMnJoOE9tbjNpdk1NU0xlNGQ2VHEwUV9SUzI1NiIsInBpLmF0bSI6ImFzc2MifQ.eyJzY29wZSI6WyJ2aWV3YWJsZXM6cmVhZCJdLCJjbGllbnRfaWQiOiJMVVdSRHM3UjZSQTNrUGREU1doejhEQ0RHaE9ja1lqZFNjVkhaZEF5akhUcXpCMlAiLCJpc3MiOiJodHRwczovL2RldmVsb3Blci5hcGkuYXV0b2Rlc2suY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20iLCJqdGkiOiJDYUlTTFNyVkZkdjBRWjZSMW02Q2RQWWFZTjNCS2lJSDlDNWE3Z2RNSmFJSzdNNTVTYnJVZm9uNWdsZ2xWWnRhIiwiZXhwIjoxNzE5ODI3ODc4fQ.DAhlyDEUxsSCBdsMWBmGfDh6qjrqQONQzP89yUK74mtlv48r8Gh9OaEEaN85yo34U8GiebCu5VGPeT75D8rxm2JQJIyC81yKweKC1xuNatOkrDZQVSazAlOjkjF8jsK6WFsF30honwTxpRHnIoQ-QEdUSYiGnMKb8N7irQWxUzpc0ogjVsCDsHVfhzydRfeqZq1hGRVlcTGqJzkKP5emcCGgRViUXquRRHsENbkkVy2faTZhQdSvU4ZJTccmDTYIpWo432S7Yj3V8qcmeHuQwGPaWk8NX_rsNe_6_LOC36iOjYgnhZCYbipxPakayMoFGRFB8l64hSVA2rwK99VlPg'
  const idView1 = 'view1'
  const idView2 = 'view2'

  const objIds = [5353, 5356, 5370, 5379, 5380]
  const objIdColors = [5353, 5356, 5370, 5379, 5380, 5382, 5387, 5388, 5409, 5410, 5415, 1399645, 1399646, 1399657, 1399658, 1401781]
  const objId2s = [
    5392, 5401, 5411, 5429, 5431, 5443, 5484, 5486, 5498,
    5556, 5558, 5570, 5572, 5579, 5581, 5366, 5371, 5383,
    5385, 5405, 5407, 5413, 5435, 5437, 5439, 5441, 5449,
    5451, 5453, 5490, 5492, 5494, 5496, 5504, 5506, 5508,
    5792, 5796, 5800, 5805, 5810, 5814
  ];





  useEffect(() => {

  }, []);

  const [dataSelect1, setDataSelect1] = useState(null)
  let dataSelect2: number[]


  const handleSelection1 = useCallback((data: any) => {
    console.log('Data received from child:', data);
    setDataSelect1(data.dbIdArray)
    console.log('dataSelect1', dataSelect1)
  }, []);

  const handleSelection2 = (data: any) => {
    console.log('Data received from child:', data);
    dataSelect2 = data.dbIdArray || []

  };

  function topContent(): JSX.Element {
    return (

      <div className='grid grid-cols-2 gap-1 h-full' >
        <ForgeViewer token={token} urn={urn} id={idView1} ref={viewerRef1}
          onSelection={handleSelection1}
        />
        <ForgeViewer token={token} urn={urn} id={idView2} ref={viewerRef2} onSelection={handleSelection2} />
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
          viewerRef1.current.isolate(objId2s);
          viewerRef2.current.isolate(objId2s);
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
          viewerRef1.current.setThemingColor(objId2s, 1, 0, 0, 0.5, isSetForChildren);
          viewerRef2.current.setThemingColor(objId2s, 1, 0, 0, 0.5, isSetForChildren);
        }}>Set Color</button>


        <button className='bg-fuchsia-500 mx-1 px-1' onClick={() => {

          viewerRef1.current.clearThemingColors();
          viewerRef2.current.clearThemingColors();
        }}>Clear Color</button>

        <div>
          <DataDisplay data={dataSelect1 || []} name='Object1 Id' />
        </div>




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

    <SplitterComponent id="splitter" height="100%" width='100%' orientation={'Vertical'} separatorSize={4} resizeStop={handleResize} >
      <PanesDirective >
        <PaneDirective size='70%' content={topContent} />
        <PaneDirective size='30%' content={bottomContent} />
      </PanesDirective>
    </SplitterComponent>



  )
}

export default page
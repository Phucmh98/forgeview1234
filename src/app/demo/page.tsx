'use client'
// import ForgeViewer from '@/components/ForgeViewer'
import ForgeViewer from '@/components/ForgeViewer'
import { ForgeViewer2 } from '@/components/ForgeViewer2'
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts'
import React, { useEffect, useRef, useState } from 'react'

function page() {
  const urn = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bHV3cmRzN3I2cmEza3BkZHN3aHo4ZGNkZ2hvY2t5amRzY3ZoemRheWpodHF6YjJwLWJhc2ljLWFwcC9TdGFuZm9yZF9QTDAxX3Y1LnJ2dA'

  const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY0RE9XMnJoOE9tbjNpdk1NU0xlNGQ2VHEwUV9SUzI1NiIsInBpLmF0bSI6ImFzc2MifQ.eyJzY29wZSI6WyJ2aWV3YWJsZXM6cmVhZCJdLCJjbGllbnRfaWQiOiJMVVdSRHM3UjZSQTNrUGREU1doejhEQ0RHaE9ja1lqZFNjVkhaZEF5akhUcXpCMlAiLCJpc3MiOiJodHRwczovL2RldmVsb3Blci5hcGkuYXV0b2Rlc2suY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20iLCJqdGkiOiJ3a0FqMktjSWxlREhIdVdrOWZXYXVtUGhLMlo5V0NFUlk1ZWZ4bVJNWmlMb3dnaDZzY1BJakZtTWwyS2haRnUwIiwiZXhwIjoxNzE5NTg0MTEwfQ.H5QIJoZd94ec-LEsu4Y7JudsRywF1mMWb8Kw62AXwnPjVPYH8H4TazPn0T-5b_DY6vqIwYgkQYSkBJRpWK1IlRdqibXFimxPj5rei2DNCW-BQcrmSQ_80Nz5fWvtENeqdZbPj-Lbmy78S0uBzOJeqpyI27yYVM_PvTRZoaNGkqpfGS6x-GJEUX1bDaQhUhiu4UaBnAUc8ISLzTmXwlu1p3rIIrvjKm5FbAf499TM1NYyof87urXf_LHM8Zwm6SrxgLYfpvXsCIzDxNJqHNJKkRJWZsNw4MIEJIoyms87uJ5krBbPMbfEjEYxoLXMSq3zHlvIoX7uA5e2WFRW9nJvcA'
  const idView1 = 'view1'
  const idView2 = 'view2'
const [action,setAction]=useState('')

  useEffect(() => {
    const paneDivs = document.querySelectorAll('.e-pane.e-pane-vertical.e-scrollable div');
    if (paneDivs.length > 0) {
      paneDivs.forEach(paneDiv => {
        //@ts-ignore
        paneDiv.style.height = '100%'
      })
    }
    // firstPaneDiv.style.height ='100%'

    console.log('có chạy lại hay không')
  }, [action]);
  function topContent(): JSX.Element {
    return (

      <div className='grid grid-cols-2 gap-1 h-full' >
        <ForgeViewer token={token} urn={urn} id={idView1} action={action}/>
        <ForgeViewer token={token} urn={urn} id={idView2} action={action}/>
      </div>

    )
  }

  function bottomContent(): JSX.Element {
    return (
      <div className='w-full h-full'>ZXCXC</div>
    )
  }

  const handleResize = ()=>{
   setAction('a123')

    
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
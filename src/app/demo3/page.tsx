'use client'
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts'
import React from 'react'

export default function page() {
  function leftContent() {
    return (<div>
      <div className="content">
        <h3>Grid </h3>
        The ASP.NET DataGrid control, or DataTable is a feature-rich control used to display data in a tabular format.
      </div>
    </div>);
  }
  function middleContent() {
    return (<div>
      <div className="content">
        <h3>Schedule </h3>
        The ASP.NET Scheduler, a.k.a. event calendar, facilitates almost all calendar features, thus allowing users to manage their time efficiently.
      </div>
    </div>);
  }
  function rightContent() {
    return (<div>
      <div className="content">
        <h3>Chart </h3>
        ASP.NET charts, a well-crafted easy-to-use charting package, is used to add beautiful charts in web and mobile applications.
      </div>
    </div>);
  }
  return (<div className="App">
    <SplitterComponent id="horizontal" height="250px" width='600px'>
      <PanesDirective>
        <PaneDirective size='200px' content={leftContent} />
        <PaneDirective size='200px' content={middleContent} />
        <PaneDirective size='200px' content={rightContent} />
      </PanesDirective>
    </SplitterComponent>
  </div>);
}

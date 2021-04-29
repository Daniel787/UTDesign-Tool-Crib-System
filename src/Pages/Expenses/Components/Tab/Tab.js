import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import SimpleTable from "../Simple_Table/SimpleTable";
import MediumTable from "../Medium_Table/MediumTable";
import FullTable from "../FullTable/FullTable";
import Tools from '../ToolExpense/Tools'
import Axios from "axios";

function TableTab(props) {
  return (
    <Tabs defaultActiveKey="report" id="report">
      <Tab eventKey="Simple" title="Simple">
        <SimpleTable
          url={props.simpleURL}
          startDate={props.startDate}
          endDate={props.endDate}
        />
      </Tab>
      <Tab eventKey="Medium" title="Medium">
        <MediumTable
          url={props.mediumURL}
          startDate={props.startDate}
          endDate={props.endDate}
        />
      </Tab>
      <Tab eventKey="Full" title="Full">
        <FullTable
          url={props.fullURL}
          startDate={props.startDate}
          endDate={props.endDate}
        />
      </Tab>
      <Tab eventKey="Tool" title="Tool">
        <Tools
          url={props.fullURL}
          startDate={props.startDate}
          endDate={props.endDate}
        />
      </Tab>
    </Tabs>
  );
}
export default TableTab;

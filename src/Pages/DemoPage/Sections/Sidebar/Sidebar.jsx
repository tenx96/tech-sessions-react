import { Button, Column, Row } from "@innovaccer/design-system";
import React from "react";
import { Activity } from "./Activity/Activity";
import { Notes } from "./Notes/Notes";
import { PatientInfo } from "./PatientInfo/PatientInfo";

export const Sidebar = () => {
  const [active, setActive] = React.useState("notes");

  return (
    <Row>
      <Column size={3}>
        <div className="d-felx flex-column">
          <Button
            onClick={() => setActive("notes")}
            icon="chat"
            appearance="transparent"
          />
          <Button
            onClick={() => setActive("activity")}
            icon="favorite"
            appearance="transparent"
          />
          <Button
            onClick={() => setActive("patient-info")}
            icon="history"
            appearance="transparent"
          />
        </div>
      </Column>
      <Column size={9}>
        {active === "notes" && <Notes />}
        {active === "activity" && <Activity />}
        {active === "patient-info" && <PatientInfo />}
      </Column>
    </Row>
  );
};

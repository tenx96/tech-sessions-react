import { Text } from "@innovaccer/design-system";
import React from "react";

export const NotesSimple = ({ data = [] }) => {
  return (
    <div>
      {data.map((item) => (
        <div className="mb-2">
          <Text appearance="subtle">{item.fact}</Text>
        </div>
      ))}
    </div>
  );
};

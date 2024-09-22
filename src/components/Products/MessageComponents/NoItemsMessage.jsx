import React from "react";
import { Alert } from "@mui/material";
import "./MessageComponent.css";

export const NoItemsMessage = () => {
  return (
    <div className="error-message">
      <Alert variant="outlined" severity="warning">
        No items for this cattegory.
      </Alert>
    </div>
  );
};

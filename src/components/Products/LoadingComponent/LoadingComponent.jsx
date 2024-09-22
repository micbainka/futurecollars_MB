import React from "react";
import "./LoadingComponent.css"; //
import { CircularProgress } from "@mui/material";

export const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <CircularProgress />
      <div className="loading-text">Loading...</div>
    </div>
  );
};

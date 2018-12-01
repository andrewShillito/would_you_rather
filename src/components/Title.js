import React, { Component } from "react";

export default function Title(props) {
  return (
    <div className="user-card-title">
      <h3>{props.title}</h3>
    </div>
  )
}

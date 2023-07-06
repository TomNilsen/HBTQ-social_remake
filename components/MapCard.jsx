import React from "react";

function MapCard(props) {
  return (
    <article className="map-card">
      <h3>{props.object.title}</h3>
      <ul>
        <li>{props.object.city}</li>
        <li>|</li>
        <li>{props.object.date}</li>
      </ul>
      <button onClick={props.info} id={props.object.id}>
        More info
      </button>
    </article>
  );
}

export default MapCard;

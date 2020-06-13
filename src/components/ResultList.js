import React from "react";

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  padding: "10px"
}

const gridItemStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: "10px",
  textAlign: "center"
}

function ResultList(props) {
  return (
    <div style={gridContainerStyle}>
      {props.results.map(result => (
        <div style={gridItemStyle} className="grid-item card" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.images.original.url} />
        </div>
      ))}
    </div>
  );
}

export default ResultList;

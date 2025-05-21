import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

const Results = ({ candidates }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, ml: 50 }}>
      <h1 id="result-header">Results</h1>
      <List>
        {candidates.map((candidate => (
          <div key={candidate.id}>
          <Divider />
            <ListItem sx={{display: "flex", justifyContent: "space-between" }}>
              <div className="result-name">
                {candidate.name} 
              </div>
              <div className="result-count">
                {candidate.votes}
              </div>
            </ListItem>
            <Divider />
          </div>
        )
        ))}
      </List>
    </Box>
  );
};

export default Results;

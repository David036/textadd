import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export default class InputSection extends Component {
  render() {
    return (
      
        <Box
        className="input-section"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          
        >
          <TextField value = {this.props.text}
          onChange = {this.props.changeFunction} id="outlined-basic" label="Text" variant="outlined" />
        </Box>
      
    );
  }
}

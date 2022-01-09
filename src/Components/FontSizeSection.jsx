import React, { Component } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default class FontSizeSection extends Component {
  render() {
    
    return (
        <div >
<Box className="font-size" sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">h</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="h"
            onChange = {this.props.changeFont}
            value = {this.props.font}
          >
            <MenuItem value={'h1'}>h1</MenuItem>
            <MenuItem value={'h2'}>h2</MenuItem>
            <MenuItem value={'h3'}>h3</MenuItem>
            <MenuItem value={'h4'}>h4</MenuItem>
            <MenuItem value={'h5'}>h5</MenuItem>
            <MenuItem value={'h6'}>h6</MenuItem>
            <MenuItem value={'p'}>p</MenuItem>
          </Select>
        </FormControl>
      </Box>
        </div>
      
    );
  }
}

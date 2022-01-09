import React, { Component } from 'react'
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default class ColorSelectSection extends Component {
    render() {
        return (
            <div>
                <Box className="font-size" sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Color</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Color"
            value={this.props.color}
            onChange = {this.props.changeColor}
          >
            <MenuItem value={'red'}>Red</MenuItem>
            <MenuItem value={'blue'}>Blue</MenuItem>
            <MenuItem value={'green'}>Green</MenuItem>

          </Select>
        </FormControl>
      </Box>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Button from '@mui/material/Button';

export default class AddBtn extends Component {
    render() {
        return (
            <div>
                <Button onClick={this.props.addFunction} variant="contained">Add</Button>
            </div>
        )
    }
}

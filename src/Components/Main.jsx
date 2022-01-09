import React, { Component } from "react";
import AddBtn from "./AddBtn";
import ColorSelectSection from "./ColorSelectSection";
import FontSizeSection from "./FontSizeSection";
import InputSection from "./InputSection";
import "./main.scss";
export default class Main extends Component {
  state = {
    text: "",
    font: "",
    color: "",
    newArray: [],
  };
  changeFunction = (element) => {
    this.setState({
      text: element.target.value,
    });
  };
  changeFont = (element) => {
    this.setState({
      font: element.target.value,
    });
  };
  changeColor = (element) => {
    this.setState({
      color: element.target.value,
    });
  };
  fontFunction = (el)=> {
    if (el.font === 'h1'){
        return(
            <h1 style={{color:el.color}}>{el.text}</h1>
        )
    } else if (el.font === 'h2'){
        return (
            <h2 style={{color:el.color}}>{el.text}</h2>
        )
    } else if (el.font === 'h3'){
        return (
            <h3 style={{color:el.color}}>{el.text}</h3>
        )
  }else if (el.font === 'h4'){
    return (
        <h4 style={{color:el.color}}>{el.text}</h4>
    ) 
} else if (el.font === 'h5'){
    return (
        <h5 style={{color:el.color}}>{el.text}</h5>
    ) 
}else if (el.font === 'h6'){
    return (
        <h6 style={{color:el.color}}>{el.text}</h6>
    ) 
}else{
    return (
        <p style={{color:el.color}}>{el.text}</p>
    ) 
}}
  addFunction = () => {
    let array = [
      ...this.state.newArray,
      { text: this.state.text, font: this.state.font, color: this.state.color },
    ];
    this.setState({
      newArray: array,
    });
    this.setState({
        text:'',
        font:'',
        color:'',
    })
  };
  render() {
    return (
      <div className="main">
        <div className="left-section">
          <InputSection
            changeFunction={this.changeFunction}
            text={this.state.text}
          />
          <FontSizeSection font = {this.state.font} changeFont = {this.changeFont} />
          <ColorSelectSection color={this.state.color} changeColor = {this.changeColor} />
          <AddBtn addFunction={this.addFunction} />
        </div>
        <div className="right-section">
        {this.state.newArray.map ((el)=> {
          return  <div>{this.fontFunction(el)}</div>
        })}
        </div>
      </div>
    );
  }
}

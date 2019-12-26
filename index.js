import "./style/animate.css"
import './style/styles.css'
import React from 'react';
import ReactDOM from 'react-dom'
import Success from "./components/Success.js"

const reactToast = {
  node: null,
  toastArray: [],
  i: 0,
  
  info(config){
    this.create("info", config)
  },
  
  succee(config){
    this.create("success", config)
  },
  
  warning(config){
    this.create("warning", config)
  },
  
  danger(config){
    this.create("danger", config)
  },

  create(type, config = {}){
    if (!config.className) {
      config.className = 'fadeInUp'
    }
    const _this = this;
    this.node = document.createElement("div")
    this.node.config = config;
    const i = this.toastArray.push(this.node);
    this.i++;

    const text = config.text || type;
    const position = config.position || "bottom";
    const timeout = config.timeout || 2000;
    
    ReactDOM.render(<Success
      className={config.className}
      type={type}
      text={text}
      position={position}
    />, this.node)
    document.body.appendChild(this.node)
    const timer = setTimeout(() => {
      reactToast.remove(_this.toastArray[i-1])
      clearTimeout(timer)
    }, timeout)
  },

  remove(node){
    const _this = this;
    const reactToast = document.getElementById("react-toast");
    reactToast.classList.remove(node.config.className);
    reactToast.classList.add("zoomOut");
    this.i--;
    const timer = setTimeout(() => {
      if (!_this.i) {
        _this.toastArray = []
      }
      document.body.removeChild(node)
      clearTimeout(timer)
    }, 1000)
  }
}

export const toast = reactToast.info.bind(reactToast)

export default reactToast
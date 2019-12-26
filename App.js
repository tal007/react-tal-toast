import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import reactToast, { taltoast } from 'react-tal-toast'
import "react-tal-toast/src/styles.css"

class App extends Component {
  toastFromBottom = _ => {
    taltoast()
  }

  toastFromTop = _ => {
    taltoast({
      text: "Toast From Top",
      className: "bounceInDown",
      position: 'top'
    })
  }

  toastSuccess = _ => {
    reactToast.succee()
  }

  toastDangerCenter = () => {
    reactToast.danger({
      position: 'center',
      className: "zoomIn"
    })
  }
  
  render() {
    return (
      <div className="toast">
        <h1>React Toast</h1>
        <ul>
          <li onClick={this.toastFromBottom}>Info from Bottom</li>
          <li onClick={this.toastFromTop}>Info from top</li>
          <li onClick={this.toastSuccess}>Success</li>
          <li onClick={_ => reactToast.warning()}>Warning</li>
          <li onClick={this.toastDangerCenter}>Danger</li>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
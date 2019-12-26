# Description
This is a library for react. There are some common react components.

## React-toast
A toast like android or IOS toast. Both work in PC and mobile.

### Usage
```js
import reactToast, { toast } from 'react-tal-toast'
```

```js
class Toast extends Component {
  toastFromBottom = _ => {
    toast()
  }

  toastFromTop = _ => {
    toast({
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
```

### props
|props|value|default|
|:---:|:---:|:---:|
|text| The message you want to display||
|className|The animation className(See https://daneden.github.io/animate.css/)|fadeInUp|
|timeout|The message show time|2000|
|position|The position of the message(one of top, bottom, center)|bottom|
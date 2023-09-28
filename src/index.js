import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let currentDate = new Date();
let currentHour = currentDate.getHours();
// console.log("The Current Hour is: "+currentHour);
let greetingMessage = "";
let cssStyle = {
  color: 'black',
}
if (currentHour >= 4 && currentHour <= 11) {
  greetingMessage = "Good Morning";
  cssStyle.color = 'pink';
}
else if (currentHour >= 12 && currentHour <= 16) {
  greetingMessage = "Good After-Noon";
  cssStyle.color = 'yellow';
}
else if (currentHour >= 17 && currentHour <= 20) {
  greetingMessage = "Good Evening";
  cssStyle.color = 'red';
}
else {
  greetingMessage = "Good Night";
}
// console.log(greetingMessage);
let s1=">>>",s2="<<<";
ReactDOM.render(
  <>
  <div className="welcomeMessage">
    <h1>{s2}====Welcome===={s1}</h1>
  </div>
    <div className='container'>
      <h1 className='message'>
        <span style={cssStyle}>
          {greetingMessage}
        </span>
      </h1>
    </div>
  </>,
  document.getElementById('root')
);

/*
Question: How to reset state with event.target.value and make it persist on multiple <li>
Url: https://stackoverflow.com/questions/72327933/how-to-reset-state-with-event-target-value-and-make-it-persist-on-multiple-li/72328908#72328908
 */
import { useState, useEffect, useRef, useMemo } from 'react';

const VALUES = [
  { id: 1, label: "name", text: "Hi, What is your Name?", placeholder: "Enter your full name" },
  { id: 2, label: "uname", text: "What shall we call you?", placeholder: "Enter a username" },
  { id: 3, label: "email", text: "Enter you email", placeholder: "Email" },
  { id: 4, label: "password", text: "Choose a password", placeholder: "make sure you dont forget" },
  { id: 5, label: "signup", text: "sign up", placeholder: ""},
];


export default function SignUp() {

  const [show, setShow] = useState(VALUES)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [details, setDetails] = useState({});

  useEffect(() => {

  }, [show]);

  const onKeyPressed = ( ev, id ) => {
    if (ev.charCode === 13) {
      ev.preventDefault();
      const nextRender = currentIndex + 1;
      if (nextRender < show.length) {
        setCurrentIndex(nextRender);
        const label = VALUES[currentIndex].label;
        details[label] = ev.target.value;
        setDetails(details);
      } else {
        //todo
      }
    }
  }
  const displayItem = useMemo(() => show[currentIndex], [show, currentIndex]);

  return (
    <div className="container" id="container">
      <div className="navigation">
        <ol>
          {Object.keys(details).map((key) => (
            <li><a href="#" dataref={key}>{key}: {details[key]}</a></li>
          ))}
        </ol>
      </div>
      <form id="sign-form" className="sign-form">
        <ol className="questions">
          <li onKeyPress={( KeyboardEvent ) => onKeyPressed(KeyboardEvent, displayItem.id)} key={displayItem.id}>
            <span><label htmlFor={displayItem.label}>{displayItem.text}</label></span>
            <input id={displayItem.id} name={displayItem.label} type="text" placeholder={displayItem.placeholder}
                   autoFocus/>
          </li>
        </ol>
      </form>
    </div>
  )
}

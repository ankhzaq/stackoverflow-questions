/*
Question: Which is the best mock server? ¿json-server vs mirage?
 */

import React, { useEffect, useState } from 'react';
import { createServer } from 'miragejs';



let server = createServer();

const createServerFunc = () => {
  server = createServer();
  server.get("/api", { results: [{ email: "zaquiel@gmail.com" }] });
  server.post("/api", { results: [{ email: "zaquiel@gmail.com" }, { email: "zaquiel2@gmail.com" }] });
}

const getRandomUser = async () => fetch('/api');
const postRandomUser = async () => fetch('/api', { method: 'POST' })

const getRandomUserJsonServer = async () => fetch('http://localhost:3000/api');
const postRandomUserJsonServer = async () => fetch('http://localhost:3000/api', { headers: { 'Content-Type': 'application/json'}, method: 'POST', body: JSON.stringify({ email: "zaquiel2@gmail.com" }) })

function Question3() {
  const [users, setUsers] = useState([]);
  const [mockActivated, setMockActivated] = useState(false);

  useEffect(() => {
    if (mockActivated) {
      createServerFunc();
    }
    else { server.shutdown(); }
    getRandomUser().then(res => res.json()).then(r => {
      setUsers(r.results);
    });
  }, [mockActivated]);


  return (
    <>
      <button onClick={() => {
        setMockActivated(!mockActivated);
      }}>{mockActivated ? <span>Deactivate mock</span> : <span>Activate mock</span>} </button>
      <div className="App">List Users</div>
      {
        users.map(user => <div>{user.email}</div>)
      }
      <button onClick={() => {
        getRandomUser().then(res => res.json()).then(r => {
          setUsers(r.results);
        });
      }}> Get users {mockActivated ? <span>(mirage)</span> : <span>(real)</span>}</button>
      <button onClick={() => {
        postRandomUser().then(res => res.json()).then(r => {
          setUsers(r.results);
        });
      }}> Post one user {mockActivated ? <span>(mirage)</span> : <span>(real)</span>}</button>
      <button onClick={() => {
        getRandomUserJsonServer().then(res => res.json()).then(r => {
          setUsers(r);
        });
      }}> Get users (json-server)</button>
      <button onClick={() => {
        postRandomUserJsonServer().then(res => res.json()).then(r => {
          setUsers([...users, r]);
        });
      }}> Post one user (mirage)</button>
    </>
  );
}

export default Question3;

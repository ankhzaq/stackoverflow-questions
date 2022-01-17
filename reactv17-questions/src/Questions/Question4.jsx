/*
Question: How to properly manage routes with react-router-dom?
Url: https://stackoverflow.com/questions/70730898/how-to-properly-manage-routes-with-react-router-dom/70731195#70731195
 */

import { Redirect, Route, Router, Switch, useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function Route2({ history, match }) {
  // id = 1
  // const { id } = match.params;
  const { id } = useParams();
  debugger;
  return (
    <>
      <div>Route 2</div>
      <button onClick={() => {
        history.push("/");
        history.go();
      }}> navigate to Route 1</button>
    </>
  );
}

function Question4() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route
            path="/client/:id/home"
            exact
            render={(props) => <Route2 {...props} />}
          />
          <Route
            path="/"
            render={({ history }) => {
              return (
                <>
                  <div>Route 1</div>
                  <button onClick={() => {
                    // history.push("/client/1/home");
                    // history.go();
                    window.location.href = '/client/1/home'
                  }}> navigate to Home</button>
                </>
              )
            }}
          />
          <Redirect path="/" />
        </Switch>
      </Router>
    </>
  );
}

export default Question4;

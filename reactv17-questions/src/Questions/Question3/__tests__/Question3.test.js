import React from 'react';
import ReactDOM from 'react-dom';
import Question3 from '../Question3';
import nock from 'nock';
import { afterAll, afterEach, it } from '@jest/globals';

describe('userQueryHelper', () => {
  afterAll(nock.restore);
  afterEach(nock.cleanAll);
  it('renders without crashing', () => {

    const scope = nock('https://randomuser.me')
      .get('/api')
      .query({ nat: 'user' })
      .reply(200, {
        results: [{ email: "email mockup" }]
      }, {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      });


    const div = document.createElement('div');
    ReactDOM.render(<Question3 />, div);

    scope.done();
    ReactDOM.unmountComponentAtNode(div);
  });
});

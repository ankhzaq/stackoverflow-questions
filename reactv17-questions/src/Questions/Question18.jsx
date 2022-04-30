/*
Doc: https://reactjs.org/tutorial/tutorial.html#lifting-state-up
Question: Reset state in redux, when make a network request
Url: https://stackoverflow.com/questions/72066173/reset-state-in-redux-when-make-a-network-request
 */

/*

    - Add a "fetchPosts.pending" reducer to initialize the state
      - (Option A) The initial value of the "posts" should be null, so you know that if the variable is null, you don't have an answer yet. (You could get an empty list from a server response).
      - (Option B) In this reducer, you can set a loading variable to true. (in the "fetchPosts.fulfilled" reducer set loading variable to false).

*/

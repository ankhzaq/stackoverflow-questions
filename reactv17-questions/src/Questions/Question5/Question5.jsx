/*
Question: How to add ellipsis in reactJs when we are passing the data?
Url: https://stackoverflow.com/questions/70888740/how-to-add-ellipsis-in-reactjs-when-we-are-passing-the-data/70888915#70888915
 */

import './style.scss';

function Question5() {

  const event = { owner: { first_name: "first_name", last_name: "last_name" } };

  // option 1
  /*return (
    <div>
      <span className="top-info-val">
     {event.owner
       ? `${event.owner?.first_name}... ${event.owner?.last_name}...`
       : "-"}</span>
    </div>
  );*/

  // option 2
  return (
    event.owner ? <>
          <span className="top-info-val ellipse">{event.owner?.first_name}</span>
          <span className="top-info-val ellipse">{event.owner?.last_name}</span>
        </>
        : <span>"-"</span>
  );
}

export default Question5;

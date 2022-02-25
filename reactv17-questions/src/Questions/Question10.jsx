/*
* Question: Read data from request which just finished
* Url: https://stackoverflow.com/questions/71256729/read-data-from-request-which-just-finished/71257368#71257368
* */
import { useState } from 'react';
import axios from 'axios';

export function Question10() {
  const [id, setId] = useState('');
  const [post, setPost] = useState(null);

  const fetchPost = async (idProp) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${idProp}`,
    );
    setPost(res.data);
  };

  const fetchPosts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    await fetchPost(res.data[0].id);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await fetchPost(id);
    } else {
      await fetchPosts();
    }
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" onChange={(e) => {
          setId(e.target.value);
        }} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

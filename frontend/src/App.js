import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  return (
    <div className="App">
      <h1>all blogs go to heaven</h1>
      <h4>By Paul Blog: Blog Cop</h4>
      {blogs && blogs.map(blog => (
        <div key={blog.id}>{blog.itemName}</div>
      ))}
    </div>
  );
}

export default App;

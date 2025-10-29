
import { useEffect, useState } from 'react';
import './App.css';
import A from './components/A';
import B from './components/B';

function App() {
//A컴포넌트 : 모든요소를 하나의 컴포넌트에
//B컴포넌트 : 여러 컴포넌트로 나눠주기

//reactprofiler 로 성능측정용

  const [value,setValue] = useState("");
  const [posts, setPosts] = useState([]);

  //데이터베이스에서 데이터를 가져오거나 API요청을 할때 쓰임
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => setPosts(posts))

  },[])

  return (
    <div style={{padding : '1rem'}}>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
      >

      </input>
      <div style={{display : 'flex'}}>
        <A message={value} posts={posts}/>
        <B message={value} posts={posts}/>
      </div>
        
    </div>
  );
}

export default App;

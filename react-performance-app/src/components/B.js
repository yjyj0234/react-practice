import React, { useCallback } from 'react'

/*
현재 앱에서 B 컴포넌트의 문제점!

현재 앱에서 B 컴포넌트는 B, List, Listltem, Message 컴포넌트로 나눠져 있습니다. 이렇게 나눠준 이유
는 재사용성을 위해서도 이지만 각 컴포넌트의 렌더링의 최적화를 위해서 이기도 합니다. 예를 들어서
Input에서 글을 타이핑을 할 때 원래는 Message 컴포넌트와 그 State 값을 가지고 있는 App 컴포넌트만
렌더링이 돼야 하는데 현재는 상관이 없는 다른 부분까지 렌더링 되고 있습니다.
 */
//그래서 같은 입력값은 한번만 실행시키기 위해 React.memo 사용
const Message = React.memo(({message}) =>{
    return <p>{message}</p>
})

const ListItem =  React.memo(({post}) =>{
    return (
        <li key={post.id}>
            <p>{post.title}</p>
        </li>
    )
})

const List =  React.memo(({posts}) =>{
    console.log('List Component Is Rendering');
    return(
        <ul>
            {posts.map(post => (
                <ListItem key={post.id} post={post}/>
            ))}
        </ul>
    )

})


const B = ({message,posts}) => {
    console.log('B Component Is Rendering');
    //[] : 의존성배열
    const testFunction = useCallback(() => {}, []);  //이거하면 list는 변하지않아서 component 렌더링 안됨
  return (
    <div>
        <h1>B Component</h1>
        <Message message={message}/> 
        {/* const B = ({message})의 message */}
        <List posts={posts} testFunction={testFunction}/>
    </div>
  )
}

export default B
import './App.css'
import { useState, useEffect } from 'react'
//props otettu vastaan suoraan nimellä
const Posts = () => {
  
    const [posts, setPosts] = useState([])

    const [showPost, setshowPost] = useState(false)

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json()) //muutetaan json data javascriptiksi
    //.then(oliot => console.log(oliot))
    .then(oliot => setPosts(oliot))
  } , []
  )


  return (
    <>
        <h2>Posts from typicode</h2>  
        {showPost && <button onClick={() => setshowPost(!showPost)}>Piilota data</button>}

        {!showPost && <button onClick={() => setshowPost(!showPost)}>Näytä data</button>} 
        {
        showPost &&  posts && posts.map(p =>
            <div className='posts' key={p.id}>
              <h2>ID number: {p.id}</h2>
              <h4 className='postText'>{p.title}</h4>
              <p>{p.body}</p>
              </div>
              
            )
        }     

    </>
  )
}

export default Posts
import { Post } from './Post'
import { Header } from './components/header'

import "./global.css"

export function App() {

  return (
    <>
    <Header/>

      <h1>hello world</h1>
      <Post 
        author="yuro" 
        content="text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <Post/>

      
    </>
  )
}



import { Post } from './components/Post'
import styles from "./App.module.css"
import { Header } from './components/Header'

import "./global.css"
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="yuro"
            content="k a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem"
          />

<Post
            author="Seumuel"
            content="Acabei de realizar um bootcamp fornecido gratuitamente pela NevCode sobre
            inteligencia Artificial para desenvolvimento Mobile, foi muito bomm"
          />
        </main>
      </div>
        
      
    </>
  )
}



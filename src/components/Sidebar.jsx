import styles from "./Sidebar.module.css"

import { PencilLine } from "@phosphor-icons/react";


export function Sidebar(){
    return (
        <>
            <aside className={styles.sidebar}>
                <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=40" ></img>
                <div className={styles.profile} >
                    <img src="https://avatars.githubusercontent.com/u/43683688?v=4"></img>
                    <strong>Yuro</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <PencilLine/>
                    <a href="#">Editar seu perfil</a>
                </footer>
            </aside>
        
        </>
    )
}
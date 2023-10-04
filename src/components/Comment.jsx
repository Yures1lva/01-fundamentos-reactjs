import styles from './styles/Comment.module.css'
import Trash from '../assets/Trash.svg'
import Like from '../assets/like.svg'
import { Avatar } from "./Avatar"


export function Comment(){
    return (
        <>
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/43683688?v=4"/>
                
            <div className={styles.contentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Yuro Silva</strong>
                            <time title="11 de maio ás 08:13" dateTime="2022-05-11 08:03:20" >Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <img src={Trash}/>
                        </button>

                    </header>
                    <p>parabens pelo trabalh ajds ajas ja sjs asjsakas k ask sk ka ak kas kd o</p>
                </div>

                <footer>
                   <button>
                    <img src={Like} alt="" />
                    Aplaudir <span>03</span>
                   </button>
                   
                </footer>
            </div>
        </div>
        </>
    )
}
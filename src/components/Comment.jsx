import styles from './styles/Comment.module.css'
import Trash from '../assets/Trash.svg'
import Like from '../assets/like.svg'

export function Comment(){
    return (
        <>
        <div className={styles.comment}>
            <img src="https://github.com/yures1lva.png"  />
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
                    <p>parabens</p>
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
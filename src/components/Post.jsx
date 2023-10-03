import { Comment } from "./Comment"
import styles from "./styles/Post.module.css"

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://avatars.githubusercontent.com/u/43683688?v=4"></img>
                    <div className={styles.authorInfo}>
                        <strong>Yuro Silva</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de maio ás 08:13" dateTime="2022-05-11 08:03:20" >Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>

                <p>Acabei de realizar um bootcamp fornecido gratuitamente pela NevCode sobre
                inteligencia Artificial para desenvolvimento Mobile, foi muito bomm</p>

                <p><a href="#">NevCode.com/bootcamp</a></p>

                <p><a href="">#IA</a> <a href="#">#Mobile</a> <a href="#">#dev</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea  placeholder="Deixe um comentário"></textarea>

                <footer className={styles.commentFooter}>
                    <button className={styles.buttonForm} type="submit">Publicar</button>
                </footer>

                <div className={styles.commentList}>
                    <Comment/>
                    <Comment/>
                </div>
            </form>
        </article>
    )
}
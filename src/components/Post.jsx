import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./styles/Post.module.css"
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from "date-fns/locale/pt-BR"



export function Post({author, publishedAt, content}){
    const publishedDatFormated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptBR})
    const publishedDateToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true},)

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src={author.avatarUrl}/>

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDatFormated} dateTime={publishedAt.toISOString()} >
                    {publishedDateToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>;
                    } else if(line.type === 'link'){
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}

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
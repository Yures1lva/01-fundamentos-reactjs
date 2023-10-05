import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./styles/Post.module.css"
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from "date-fns/locale/pt-BR"
import { useState } from "react"



export function Post({author, publishedAt, content}){
    const publishedDatFormated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptBR})
    const publishedDateToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true},)

    const [comments, setComments] = useState([
        "Post dahora em"
    ])

     function handleCreateNewComment(){
        event.preventDefault()
        const newCommentText = event.target.comment.value
        setComments([...comments, newCommentText])
        event.target.comment.value =''
    }

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
            <form  onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea name="comment" placeholder="Deixe um comentário"></textarea>

                <footer className={styles.commentFooter}>
                    <button className={styles.buttonForm} type="submit">Publicar</button>
                </footer>

                <div className={styles.commentList}>
                    {comments.map(comment =>
                        {
                            return <Comment content={comment} />
                        })}
                </div>        
            </form>
        </article>
    )
}
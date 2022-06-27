import React from "react";
import cls from './Comments.module.scss'
import { useAuth } from "../../providers/useAuth";
import { getComments , postComment } from "../../api";

export const Comments = () => {
    const {users} = useAuth()
    const [value , setValue] = React.useState('')
    const [comment, SetComment] = React.useState(null)


    React.useEffect(() => {
        getComments()
        .then(res => {
          const data = res ? Object.entries(res).map(([id, rest]) => {
            return {
              id,
              ...rest
            }
          }) : []
          SetComment(data)
        })
    }, [comment])


      const sendComment = e => {
        e.preventDefault()
        const date = new Date()
        postComment({
          uid: users.uid,
          name: users.name,
          text: value,
          photo: users.photo,
          time: {
            hour: date.getHours(),
            minute: date.getMinutes()
          }
        })
        setValue(' ')
      }

    return ( 
        <div className={cls.CommentsBlock}>
            <div className={cls.row}>
                <div className={cls.user}>
                    <div className={cls.profile}>
                        <img src={users.photo} className={cls.image}/>
                    </div>
                    <p>{users.name}</p>
                </div>
                <div className={cls.text}>
                    <input 
                        type="text" 
                        placeholder="Оставить комментарий" 
                        className={cls.com}
                        onInput={e => {
                            setValue(e.target.value)
                        }}
                        onChange={e => setValue(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={e => sendComment(e)} className={cls.sendBtn}>Send</button>
                </div>
            </div>
        </div>
    )
}
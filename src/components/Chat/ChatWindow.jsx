import React from 'react'
import './Chat.scss'
import { AiOutlineSend } from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive'
import { getMessages, postMessage } from '../../api'
import { useAuth } from '../../providers/useAuth'

const ChatWindow = ({isToggle, toggle}) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 425px)"
  })
  const isOther = useMediaQuery({
    query: "(min-width: 768px)"
  })
  const { users } = useAuth()

  const [value, setValue] = React.useState('')
  const [messages, setMessages] = React.useState(null)

  React.useEffect(() => {
    getMessages()
    .then(res => {
      const data = res ? Object.entries(res).map(([id, rest]) => {
        return {
          id,
          ...rest
        }
      }) : []
      setMessages(data)
    })
  }, [messages])


  const sendMessage = e => {
    e.preventDefault()
    const date = new Date()
    postMessage({
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
    <React.Fragment>
      {
        isMobile && (
          <div className={isToggle ? 'chatWindow active' : 'chatWindow'}>
            <span onClick={toggle} className='closeChat'>&times;</span>
            <div className="topChat">
              <div className="img"></div>
              <div>
                <h3>Анастасия</h3>
                <p>Консультант</p>
              </div>
            </div>
            <div className="mainChat">
              <div className="img"></div>
              <div className="block">
                Здраствуйте
                <br />
                Чем могу Вам помочь?
              </div>
            </div>
            <div className="footerChat">
              <input 
                onInput={e => {
                  setValue(e.target.value)
                }}
                type="text"
                placeholder='Введите сообщение'
              />
              <div onClick={() => {}}>
                <AiOutlineSend/>
              </div>
            </div>
          </div>
        )
      }
      {
        isOther && (
          <div className={isToggle ? 'chatOther active' : 'chatOther'}>
            <span onClick={toggle} className='closeChat'>&times;</span>
            <div className="chatTitle">
              <h3>Чат поддержки</h3>
            </div>
            <div className="mainChat">
              {messages?.map(message => (
                <div key={message.text} className={users.uid === message.uid ? 'mainBlock' : 'otherBlock'}>
                  <div className='userBlock'>
                    <img src={message.photo} className='photoUrl' alt="" />
                    <h5>{message.name}</h5>
                  </div>
                  <div className='block'>
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="footerChat">
              <input 
                onChange={e => setValue(e.target.value)}
                type="text"
                value={value}
                placeholder='Введите сообщение'
              />
              <div onClick={e => {
                sendMessage(e)
              }}>
                <AiOutlineSend/>
              </div>
            </div>  
          </div>
        )
      }
    </React.Fragment>
  )
}

export default ChatWindow
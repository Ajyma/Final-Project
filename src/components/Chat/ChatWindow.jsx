import React from 'react'
import './Chat.scss'
import { AiOutlineSend } from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive'

const ChatWindow = ({isToggle, toggle}) => {

  const [value, setValue] = React.useState('')

  const isMobile = useMediaQuery({
    query: "(max-width: 425px)"
  })
  const isOther = useMediaQuery({
    query: "(min-width: 768px)"
  })

  const [isActive, setIsActive] = React.useState(false)

  function sendMessage(text) {
    return (
      <>
        <div className="blockPerson">
          {text}
        </div>
        <div className="img"></div>
      </>
    )
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
              {isActive && sendMessage(value)}
            </div>
            <div className="footerChat">
              <input 
                onInput={e => setValue(e.target.value)}
                type="text"
                placeholder='Введите сообщение'
              />
              <div onClick={() => setIsActive(!isActive)}>
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
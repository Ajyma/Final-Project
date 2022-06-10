import React from 'react'
import './Chat.scss'
import { AiOutlineSend } from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive'

const ChatWindow = ({isToggle, toggle}) => {

  const isMobile = useMediaQuery({
    query: "(max-width: 425px)"
  })
  const isOther = useMediaQuery({
    query: "(min-width: 768px)"
  })

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
              <input type="text" name="" placeholder='Введите сообщение'/>
              <AiOutlineSend/>
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
            </div>
            <div className="footerChat">
              <input type="text" name="" placeholder='Введите сообщение'/>
              <div>
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
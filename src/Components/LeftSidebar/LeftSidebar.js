import React, {useState} from 'react';
import "./LeftSidebar.scss";
import InputEmoji from 'react-input-emoji'

const LeftSidebar = () => {
    const [ text, setText ] = useState('')

    function handleOnEnter (text) {
        console.log('enter', text)
      }
    return (
        <div>
             <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />
        </div>
    )
}

export default LeftSidebar;

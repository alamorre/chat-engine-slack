import { ChatEngine } from 'react-chat-engine'

import ChatList from './ChatList'
import Message from './Message'

import { users, createUsers } from './scripts/users'

createUsers()

function App() {
  const user = users[0]

  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <ChatEngine 
        development={true}
        height='100vh'
        projectID='b0c492b5-398b-47a8-820c-1ff760e997b1'
        userName={user.username}
        userSecret={user.secret}
        offset={user.custom_json.gmt_offset}
        renderChatList={(stuff) => <ChatList {...stuff} />}
        renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <Message creds={creds} chat={chat} lastMessage={lastMessage} message={message} nextMessage={nextMessage} />}
        renderSendingMessages={(creds, chat, lastMessage, message, nextMessage) => <Message creds={creds} chat={chat} lastMessage={lastMessage} message={message} nextMessage={nextMessage} sending={true} />}
      />
    </div>
  );
}

export default App;

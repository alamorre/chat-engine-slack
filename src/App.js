import { ChatEngine } from 'react-chat-engine'

import ChatList from './ChatList'

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <ChatEngine 
        development={true}
        height='100vh'
        projectID='b0c492b5-398b-47a8-820c-1ff760e997b1'
        userName='Adam La Morre'
        userSecret='pass1234$'
        renderChatList={(stuff) => <ChatList {...stuff} />}
      />
    </div>
  );
}

export default App;

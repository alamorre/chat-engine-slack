## Slack with Chat Engine

![Slack Clone with Chat Engine](https://chat-engine-assets.s3.amazonaws.com/tutorials/slack-clone-1-min.png)

## Setup Required

### 1) Create Chat Engine Project

You will need to create a sample project to see this project run. Go to https://chatengine.io and create a sample project.

### 2) .env file

Make sure to add a .env file and put in the following fields:

You'll need to copy/paste your new project's ID and Private Key into this file.

```
REACT_APP_CHAT_ENGINE_PROJECT_ID=abcdabcd-abcd-abcd-abcd-abcdabcdabcd
REACT_APP_CHAT_ENGINE_PRIVATE_KEY=12341234-1234-1234-1234-123412341234
```

## Chat Engine Tutorial

Chat Engine

- React Framework for makign and hosting Chat Experiences
- Why it was made
- Technical components

Technical Topics (in order)

- Context API and Functions
  - index.js > ChatEngineWrapper
  - ChatEngine component (Avenir div shoutout)
  - Chat List -> Link SetActiveChat
- Render Functions
  - Chat List
  - (Sending) Messages
- Components
  - Chat Header
    - APIs
      - User Upload Script
    - Copy/Paste Snippets
      - Timezone (color and Body)
- Slack Theme
  - Message Code
  - Body + Color Snippets

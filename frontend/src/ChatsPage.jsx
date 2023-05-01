import {
  PrettyChatWindow,
} from "react-chat-engine-pretty";
const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: '100vw' }}>
      <PrettyChatWindow
        projectId="ad6781d2-07b2-4ca4-a8fe-e425e2d27a78"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%'}}
        />
    </div>
  );
};

export default ChatsPage;

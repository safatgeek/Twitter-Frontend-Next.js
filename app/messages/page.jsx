import AllMessages from "../components/messages/AllMessages";
import MessageContainer from "../components/messages/MessageContainer";

const MessagePage = () => {
  return (
    <div className="w-full flex gap-6 border-r border-slate-800 overflow-x-hidden">
      <AllMessages />
      <MessageContainer />
    </div>
  );
};

export default MessagePage;

import ContainerComponent from "./ContainerComponent"

const MessageContainer = ({ selectedMessage, UnselectChatHandler }) => {
  return (
    <div className={`${selectedMessage ? "w-full flex " : "hidden md:flex md:self-center md:w-[55%]"} py-4`}>
        <ContainerComponent selectedMessage={selectedMessage} UnselectChatHandler={UnselectChatHandler} />
    </div>
  )
}

export default MessageContainer
import ContainerComponent from "./ContainerComponent"

const MessageContainer = ({ selectedMessage, UnselectChatHandler }) => {
  return (
    <div className={`${selectedMessage ? "w-full flex lg:w-[55%]" : "hidden lg:flex w-[55%]"} py-4`}>
        <ContainerComponent selectedMessage={selectedMessage} UnselectChatHandler={UnselectChatHandler} />
    </div>
  )
}

export default MessageContainer
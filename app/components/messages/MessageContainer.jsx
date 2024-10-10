import ContainerComponent from "./ContainerComponent"

const MessageContainer = ({ selectedMessage }) => {
  return (
    <div className={`${selectedMessage ? "w-full lg:w-[55%]" : "w-[55%]"}  hidden lg:flex py-4`}>
        <ContainerComponent selectedMessage={selectedMessage}/>
    </div>
  )
}

export default MessageContainer
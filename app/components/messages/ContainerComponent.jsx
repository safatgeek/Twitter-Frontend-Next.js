const ContainerComponent = () => {
  const chat = [];
  return (
    <div className="h-full w-full flex justify-center items-center">
      {chat.length == 0 && (
        <div className="flex flex-col gap-2">
          <span className="text-3xl font-bold">Select a message</span>
          <div className="flex flex-col">
            <span className="text-sm text-slate-500">
              Choose from your existing conversations, start a
            </span>
            <span className="text-sm text-slate-500">
              new one, or just keep swimming
            </span>
          </div>
          <button className="btn btn-info text-white text-lg w-44 rounded-full mt-6">New Message</button>
        </div>
      )}
    </div>
  );
};

export default ContainerComponent;

const RightPannel = () => {
  return (
    <div className="p-4 lg:w-[29%] hidden lg:block">
      <div className="bg-stone-900 p-4 rounded">
        <div>Who to follow</div>
        <div className="flex flex-col gap-3 pt-4">
          <div className="flex items-center gap-4">
            <div className="avatar h-7 w-7 rounded-full border"></div>
            <div className="flex flex-col">
              <span className="text-sm">Full Name</span>
              <span className="text-sm text-gray-600">@username</span>
            </div>

            <button className="btn btn-sm bg-gray-100 hover:bg-gray-300 text-black rounded-full">Follow</button>
          </div>

          <div className="flex items-center gap-4">
            <div className="avatar h-7 w-7 rounded-full border"></div>
            <div className="flex flex-col">
              <span className="text-sm">Full Name</span>
              <span className="text-sm text-gray-600">@username</span>
            </div>

            <button className="btn btn-sm bg-gray-100 hover:bg-gray-300 text-black rounded-full">Follow</button>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default RightPannel;
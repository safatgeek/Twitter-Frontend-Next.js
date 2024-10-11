import { IoSettingsOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";

const NotificationPage = () => {
  const notifications = [
    {
      from: "Raghib Rahat",
      user: "raghib",
      type: "follow",
      read: true,
    },

    {
      from: "Rifat Alam",
      user: "rifat",
      type: "like",
      read: true,
    },

    {
      from: "Raghib Rahat",
      user: "raghib",
      type: "like",
      read: false,
    },

    {
      from: "Monirul Islam",
      user: "monir",
      type: "follow",
      read: false,
    },
    {
      from: "Raghib Rahat",
      user: "raghib",
      type: "like",
      read: false,
    },

    {
      from: "Monirul Islam",
      user: "monir",
      type: "follow",
      read: false,
    },
    {
      from: "Raghib Rahat",
      user: "raghib",
      type: "like",
      read: false,
    },

    {
      from: "Monirul Islam",
      user: "monir",
      type: "follow",
      read: false,
    },
  ];
  return (
    <div className="w-full flex flex-col border-r border-slate-800">
      <div className="flex justify-between items-center border-b border-slate-800 px-4 py-2">
        <span className="text-xl font-semibold">Notifications</span>
        <IoSettingsOutline className="h-10 w-10 px-3 hover:bg-stone-800 hover:rounded-full cursor-pointer" />
      </div>

      <div className="flex h-full">
        {notifications.length == 0 && (
          <div className="flex flex-col mx-auto mt-6">
            <span className="text-3xl font-bold">Nothing to see here —</span>
            <span className="text-3xl font-bold">yet</span>
            <span className="text-sm text-slate-500 mt-4">
              From likes to comments and a whole lot more, this
            </span>
            <span className="text-sm text-slate-500">
              is where all the action happens.
            </span>
          </div>
        )}

        {notifications.length > 0 && (
          <div className="flex flex-col gap-4 w-full p-4">
            {notifications.map((notification, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaUser className="fill-blue-500 h-7 w-7" />
                  <span className="text-lg font-bold">{notification.from}</span>
                  <span className="text-sm">followed you</span>
                </div>

                <div className="flex flex-col gap-2 border border-slate-800 rounded p-4">
                  <div className="flex items-start justify-between">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS chat bubble component"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                      </div>
                    </div>

                    <button className="btn btn-sm btn-info">Follow</button>
                  </div>

                  <div className="flex flex-col">
                    <span className="font-semibold">{notification.from}</span>
                    <span className="text-sm text-slate-500">@{notification.user}</span>
                    <span className="text-sm">The bio of {notification.from}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPage;

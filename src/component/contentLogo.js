import { MdOutlineHouse } from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import { RiHotelLine } from "react-icons/ri";
  const iconClass =
    "text-[2rem] inline text-gray-500 hover:text-white ml-auto mr-auto";
  const icons = [
    {
      name: "Rentals",
      icon: <MdOutlineHouse className={` ${iconClass}`} />,
    },
    {
      name: "Hotel",
      icon: <RiHotelLine className={`${iconClass}`} />,
    },
    { name: "Resort", icon: <TbBeach className={`${iconClass}`} /> },
  ];
      <div className="bg-white grid grid-cols-3 place-items-center w-[21rem] rounded-xl shadow-sm  border border-gray-200 p-8 py-3">
        {icons.map((icon) => (
          <span className="flex flex-wrap justify-center flex-col text-center center">
            <span className="center">
              {icon.icon}
              <p className="text-xs text-gray-400 font-600">{icon.name}</p>
            </span>
          </span>
        ))}
      </div>

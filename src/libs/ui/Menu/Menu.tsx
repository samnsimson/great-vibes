import { Menu as MenuDropDown } from "@headlessui/react";
import { FC } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { MenuDropDownProps } from "../../types";
import { twMerge } from "tailwind-merge";
import { classNames } from "../../utils";

const Menu: FC<MenuDropDownProps> = ({ className, menuAction, job }) => {
    return (
        <div className={classNames(twMerge("relative", className))}>
            <MenuDropDown>
                <MenuDropDown.Button className="float-right">
                    <EllipsisVerticalIcon className="h-6 w-6 text-black" />
                </MenuDropDown.Button>
                <MenuDropDown.Items className="border-[1px] border-lightGrey rounded shadow clear-right absolute bg-white right-0 top-6">
                    {menuAction.map(({ label, icon, action }, idx) => (
                        <MenuDropDown.Item key={idx}>
                            <button
                                onClick={() => action(job)}
                                className="flex gap-2 items-center py-1 px-2 border-b-[1px] last:border-none w-full hover:bg-lightGrey"
                            >
                                {icon}
                                <span className="text-darkGrey">{label}</span>
                            </button>
                        </MenuDropDown.Item>
                    ))}
                </MenuDropDown.Items>
            </MenuDropDown>
        </div>
    );
};

export default Menu;

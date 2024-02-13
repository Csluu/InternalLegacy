import React, { useState } from "react";
import { SideBarItem } from "../types"; // Adjust the import path as necessary
import { sideBarItems } from "@/constants";
import { ModeToggle } from "./mode-toggle";
import Arrow from "@/assets/icons/Arrow";
import { Switch } from "@/components/ui/switch";

const Sidebar = () => {
	// State to keep track of open submenus using an array
	const [openIndices, setOpenIndices] = useState<number[]>([]);

	// Function to handle clicking on a menu item
	const handleItemClick = (index: number) => {
		// Check if the clicked menu's index is already in the openIndices array
		const isOpen = openIndices.includes(index);

		if (isOpen) {
			// If the submenu is open, remove its index from the array to close it
			setOpenIndices(openIndices.filter((i) => i !== index));
		} else {
			// If the submenu is closed, add its index to the array to open it
			setOpenIndices([...openIndices, index]);
		}
	};

	return (
		<div className="w-72 fixed bg-[#161A23] flex flex-col justify-between py-6 text-[#7D7F85] rounded-r-xl overflow-scroll h-screen border-r-2 border-gray-700">
			<ul>
				<header className="flex py-3 px-6 gap-5 text-4xl flex-row place-items-center pb-6 ">
					<img src="./assets/icons/AFCEA.png" className="w-16" />
					<h1>AFCEA</h1>
				</header>
				{sideBarItems.map((item: SideBarItem, index: number) => (
					<li key={index} className="flex py-1 px-2 gap-2 flex-col">
						<div
							className="flex items-center hover:bg-gray-800 py-3 px-6 rounded-lg cursor-pointer hover:text-white"
							onClick={() => handleItemClick(index)}
						>
							{item.icon && (
								<img
									src={item.icon}
									alt={`${item.text} icon`}
									className="h-6 w-6 mr-2"
								/>
							)}
							<p className="flex flex-row justify-between w-full">
								{item.text}
								<Arrow isOpen={openIndices.includes(index)} />
							</p>
						</div>
						{openIndices.includes(index) &&
							item.submenu &&
							item.submenu.length > 0 && (
								<ul className="pl-9 flex flex-row gap-5">
									<span className="border-[2px] border-gray-700 mb-8  "></span>
									<span className="flex flex-col gap-3">
										{item.submenu.map((subItem: string, subIndex: number) => (
											<li key={subIndex} className="flex ">
												<span className="-translate-x-[24px] -translate-y-[18px] mt-4 w-8 border-b-[3px] border-l-[4px]  rounded-bl-xl border-gray-700 "></span>
												<p className="hover:text-white hover:bg-gray-800 rounded-lg p-2">
													{subItem}
												</p>
											</li>
										))}
									</span>
								</ul>
							)}
					</li>
				))}
			</ul>
			<div className="flex flex-col ">
				<div className="px-10">
					<ModeToggle />
	
				</div>
				<p>Log out</p>
			</div>
		</div>
	);
};

export default Sidebar;

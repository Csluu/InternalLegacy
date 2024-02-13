import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

import { ModeToggle } from "@/components/mode-toggle";

const Navigation = () => {
	return (
		<div className="flex flex-row">
			<Sidebar />

			<Outlet />
		</div>
	);
};

export default Navigation;

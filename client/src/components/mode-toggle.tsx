import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	return (
		<Button
			variant="default"
			size="icon"
			onClick={toggleTheme}
			className="w-full flex justify-start place-items-center gap-5 "
		>
			<div className="flex flex-row place-items-center justify-center">
				<Sun
					className={`flex absolute transition duration-300 ease-in-out ${
						theme === "dark"
							? "opacity-100 scale-100 rotate-0"
							: "opacity-0 scale-0 -rotate-90"
					}`}
				/>
				<Moon
					className={`flex absolute  transition duration-300 ease-in-out ${
						theme === "light"
							? "opacity-100 scale-100 rotate-0"
							: "opacity-0 scale-0 rotate-90"
					}`}
				/>
			</div>

			<p className="text-lg">Light Mode</p>
			<Switch />
		</Button>
	);
}

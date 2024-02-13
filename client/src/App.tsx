import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "@/scenes/Navigation";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/scenes/Home";

function App() {
	return (
		<div>
			<BrowserRouter>
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					<Routes>
						<Route element={<Navigation />}>
							<Route path="/" element={<Home />} />
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;

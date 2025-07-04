import { ElementType, StrictMode } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import { base } from "./manifest.json";
import ErrorBoundary from "./src/runtime/ErrorBoundry";
import "styles/main.less";
import "setimmediate";
import Drawer from "./src/components/Drawer";
import Toolbar from "./src/components/Toolbar";
import Footer from "./src/components/Footer";
import Keybinds from "./src/runtime/Keybinds";
import PWAInstaller from "./src/components/PWAInstaller";

if ("serviceWorker" in navigator && !/localhost/.test(window.location.toString())) registerSW({
	immediate: true
});

export const queryClient = new QueryClient;

export type Page = { default: ElementType, path: string, caseSensitive?: boolean };

// Modern Vite: use import.meta.glob with eager: true
const pages = Object.values(
  import.meta.glob<Page>("./src/pages/*.tsx", { eager: true })
);

// FUNNI.games ASCII art!
console.log(`
 _______  __    _  __   __  __    _  ___   _  ___   __    _  _______  _______ 
|       ||  |  | ||  | |  ||  |  | ||   | | ||   | |  |  | ||       ||       |
|    ___||   |_| ||  |_|  ||   |_| ||   |_| ||   | |   |_| ||    ___||  _____|
|   |___ |       ||       ||       ||      _||   | |       ||   |___ | |_____ 
|    ___||  _    ||_     _||  _    ||     |_ |   | |  _    ||    ___||_____  |
|   |___ | | |   |  |   |  | | |   ||    _  ||   | | | |   ||   |___  _____| |
|_______||_|  |__|  |___|  |_|  |__||___| |_||___| |_|  |__||_______||_______|
`);
console.log("%cWelcome to FUNNI.games!", "color: #6246ea; font-weight: bold; font-size: 16px;");

ReactDOM.render(
	<StrictMode>
		<ErrorBoundary>
			<QueryClientProvider client={ queryClient }>
				<BrowserRouter>
					<Toolbar/>
					<Drawer/>
					<Routes>
						{ Object.values(pages).map((page, key) => <Route
							key={ key }
							path={ base + page.path.substring(1) }
							caseSensitive={ page.caseSensitive || false }
							element={ <page.default/> }/>
						) }
					</Routes>
					<Footer/>
					<PWAInstaller/>
					<Keybinds/>
				</BrowserRouter>
				{ !PRODUCTION && <ReactQueryDevtools/> }
			</QueryClientProvider>
		</ErrorBoundary>
	</StrictMode>,
	document.getElementById("root")
);
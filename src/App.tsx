import { Tabs } from "@ark-ui/solid";
import type { Component } from "solid-js";

const App: Component = () => {
	return (
		<>
			<h1>Ark UI Solid Repro</h1>
			<p>Please edit src/App.tsx and save to reload.</p>
			<Tabs.Root defaultValue="react">
				<Tabs.List>
					<Tabs.Trigger value="react">React</Tabs.Trigger>
					<Tabs.Trigger value="vue">Vue</Tabs.Trigger>
					<Tabs.Trigger value="solid">Solid</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="react">React Content</Tabs.Content>
				<Tabs.Content value="vue">Vue Content</Tabs.Content>
				<Tabs.Content value="solid">Solid Content</Tabs.Content>
			</Tabs.Root>
		</>
	);
};

export default App;

import { defaultTheme, Provider as ThemeProvider } from "@adobe/react-spectrum";
import { FilterContextProvider } from "../contexts/FilterContext";
import { UserInterface } from "./Layout";
import { QueryClientProvider } from "./QueryClient";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider>
        <FilterContextProvider>
          <UserInterface />
        </FilterContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

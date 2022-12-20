import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeaderSearch } from "../components/Header";
import { NavbarMinimalColored } from "../components/Navbar";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <HeaderSearch />
        <Box display="flex" my="lg">
          <NavbarMinimalColored />
          <Component {...pageProps} />
        </Box>
      </MantineProvider>
    </QueryClientProvider>
  );
}

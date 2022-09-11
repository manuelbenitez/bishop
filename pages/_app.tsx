import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StoreProvider } from "easy-peasy";
import { store } from "../store";

type Props = StoreProvider["props"] & { children: React.ReactNode };
const StoreProviderCasted =
  StoreProvider as unknown as React.ComponentType<Props>;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProviderCasted store={store}>
      <Component {...pageProps} />
    </StoreProviderCasted>
  );
}

export default MyApp;

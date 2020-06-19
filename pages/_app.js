import App, { Container } from 'next/app';
import { AppContextProvider } from "../components/contexts/AppContext";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    );
  }
}

export default MyApp;

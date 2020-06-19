import App, { Container } from 'next/app';
import { AppContextProvider } from "../contexts/AppContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
//  {
//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <AppContextProvider>
//         <Component {...pageProps} />
//       </AppContextProvider>
//     );
//   }
// }

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default MyApp;

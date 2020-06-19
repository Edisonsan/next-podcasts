import Head from 'next/head'
import { useEffect } from 'react'
import { useAppContext } from '../components/contexts/AppContext';

export const Home = () => {
  const { isAuthenticated, setAuthenticated } = useAppContext();


  //ComponentDidMouunt
  React.useEffect(() => {
    console.log('NOOOO');
    setAuthenticated(true);
    console.log(isAuthenticated);
   }, [isAuthenticated] );

  
  return (
    <div className="container">
      <Head>
        <title>PodCasts with Context and Hooks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          PODCAST APP {`${isAuthenticated}`}
        </h1>

        <p className="description">
          Get Started with LanguageContext
        </p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }


        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home;
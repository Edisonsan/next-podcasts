/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, createContext } from 'react';


//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  const [isAuthenticating, setAuthenticating] = React.useState(true);
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  

  //ComponentDidMouunt
  React.useEffect(() => {
    
    //Inner OnLoad only in ComponentDidMount
    const onLoad = async () => {
      try {
    
      } catch (err) {

      }
    }

    setAuthenticated(false);

  }, []);

  //
  const values = React.useMemo(() => (
    { isAuthenticating, isAuthenticated, 
      setAuthenticated
    }), 
    [ 
      isAuthenticating, isAuthenticated ]);

  // Finally, return the interface that we want to expose to our other components
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

//
export function useAppContext() {
  const context = useContext(AppContext);

  return context;
}
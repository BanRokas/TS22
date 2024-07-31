import { createContext, useState } from "react";

const PageLoaderContext = createContext();

const PageLoaderProvider = ({ children }) => {

  const [pageLoader, setPageLoader] = useState('home');

  return(
    <PageLoaderContext.Provider
      value={{
        pageLoader,
        setPageLoader
      }}
    >
      { children }
    </PageLoaderContext.Provider>
  );
}

export { PageLoaderProvider };
export default PageLoaderContext;
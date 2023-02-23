import './App.css';
// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
// import Body from './Body/Body';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlogPostProvider } from "./contexts/BlogPostContext";

import { ERROR_ROUTE, HOME_ROUTE } from "./constants/routes.jsx";
import  Error  from "./pages/Error/index";
import Home  from "./pages/Home/index";
import  PageNotFound  from "./pages/PageNotFound/index";

function App() {
  return (
  //   <div className="App">
  //   <header>
  //     <Header />
  //   </header>
  //    <Body/>
  //   <footer>
  //     <Footer />
  //   </footer> 
  // </div>
  <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={
              <BlogPostProvider>
                <Home />
              </BlogPostProvider>
            } />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { MyRoutes } from './Routes/routes.index';
import "./globalStyle.css";
import "./Pages/pages.styles.css";
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './Contexts/Users.context';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <UserProvider>
      <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
      <MyRoutes/>
    </UserProvider>
    </>
  );
}

export default App;

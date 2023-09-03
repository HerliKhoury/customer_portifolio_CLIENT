import { MyRoutes } from './Routes/routes.index';
import "./globalStyle.css";
import "./Pages/pages.styles.css";
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './Contexts/Users.context';
import "react-toastify/dist/ReactToastify.css";
import { CustomerProvider } from './Contexts/Customers.context';
import { ModalProvider } from './Contexts/Modal.context';

function App() {
  return (
    <>
    <CustomerProvider>
      <ModalProvider>
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
      </ModalProvider>
    </CustomerProvider>
    </>
  );
}

export default App;

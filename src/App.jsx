import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import Container from '@mui/material/Container';
import { ToastContainer } from 'react-toastify';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer
        position="bottom-right"
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
      <Container
        style={{
          display: 'flex',
          minHeight: '80vh',
          marginTop: '35px',
          justifyContent: 'center',
        }}
        maxWidth="xl"
      >
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;

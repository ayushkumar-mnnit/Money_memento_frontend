import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/clien
//createRoot is a function provided by react-dom/client that allows you to create a root element for rendering your application. This is a newer way to render React applications.t
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import ChatProvider from './Context/ChatProvider';

const root = document.getElementById('root');

const rootElement = createRoot(root); // Use createRoot from react-dom/client

rootElement.render(
  <React.StrictMode>
    <Router>
      <ChatProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ChatProvider>
    </Router>
  </React.StrictMode>
);





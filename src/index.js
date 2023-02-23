import React from 'react';
import {QueryClientProvider, QueryClient} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react"
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

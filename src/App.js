import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
    <div className="App">
      <Header/>
      <Dashboard/>
    </div>
    <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;

import "./App.css";
import React from "react";

import AddRecordForm from "./components/AddRecordForm";
import PhoneBookRecords from "./components/PhoneBookRecords";
import RecordDataContextProvider from "./providers/recordDataContex";
import LoginForm from "./components/LoginForm";

import AuthProvider from "./providers/authContex";

function App() {
  return (
    <AuthProvider>
      <LoginForm />
      <RecordDataContextProvider>
        <div className="App">
          <AddRecordForm />
          <PhoneBookRecords />
        </div>
      </RecordDataContextProvider>
    </AuthProvider>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth/provider/auth";
import { ChatPage, JoinPage, LoginPage, RegisterPage } from "./page";
import "./index.css"

const App = () => {
  return <AuthProvider>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  </AuthProvider>
}

export default App;
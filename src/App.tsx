import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth/provider/auth";
import { JoinPage, LoginPage } from "./page";
import "./index.css"

const App = () => {
  return <AuthProvider>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />

    </Routes>
  </AuthProvider>
}

export default App;
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth/provider/auth";
import { ChatPage, HomePage, JoinPage, LoginPage, MemoPage, PostPage, RegisterPage, CounselPage } from "./page";
import "./index.css"

const App = () => {
  return <AuthProvider>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/memo" element={<MemoPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/counsel" element={<CounselPage />} />
    </Routes>
  </AuthProvider>
}

export default App;
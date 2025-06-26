import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import Project_1 from "./pages/Porject1";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/project_1" element={<Project_1 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

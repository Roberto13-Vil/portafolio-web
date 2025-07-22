import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import Project_1 from "./pages/Project1";
import Project_2 from "./pages/Project2";
import Project_3 from "./pages/Project3";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/project-1" element={<Project_1 />} />
          <Route path="/project-2" element={<Project_2 />} />
          <Route path="/project-3" element={<Project_3 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./index.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";


// query client kurulum
const queryClient = new QueryClient();

// query client sağlaycısı ile uygulamayı sarmalıyoruz
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ToastContainer />
  
  </QueryClientProvider>
);
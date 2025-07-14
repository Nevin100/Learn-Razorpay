import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from "./components/ui/provider.tsx";
import { RouterProvider } from "react-router-dom";
import router from './Routes/router.tsx';

createRoot(document.getElementById('root')!).render(
    <Provider>
         <RouterProvider router={router} />
       </Provider>
)

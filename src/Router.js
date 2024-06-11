import {createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Root from './pages/Root';


const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    index: true, //* This is the default route for the root
                    element: <Home />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "blogs/:category/:filter?",
                    element: <Blogs />
                }
            ]
        }
    ]
);

export default router;


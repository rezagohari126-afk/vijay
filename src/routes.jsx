import Home from './pages/work/home/Home'
import Work from './pages/work/Work'
import Nft from './pages/work/nft/Nft' 
import Story from './pages/work/story/Story'
import Timeline from  './pages/work/timelin/Timeline'
import Appstack from './pages/work/appstack/Appstack'
import About from './pages/work/about/About'



const routes = [
    {path:'/' , element: <Home></Home>},
    {path:'/work',element: <Work></Work>},
    {path:'/nft',element: <Nft></Nft>},
    {path:'/Story',element: <Story></Story>},
    {path:'/timeline',element: <Timeline></Timeline>},
    {path:'/Appstack',element: <Appstack></Appstack>},
    {path:'/about',element: <About></About>},
   
];
export default routes;
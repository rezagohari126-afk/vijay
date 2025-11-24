import './App.css'
import './routes'
import { useRoutes } from 'react-router'
import { useState } from 'react'
import routes from './routes'
import './index.css'
import Intro from './component/intro'



function App() {
 const router = useRoutes(routes);
 const [showIntro, setShowIntro] = useState(true);

   if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }
  return (
    <>
        
        {router}
       
    </>
  )
}

export default App

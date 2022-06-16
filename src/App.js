import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AlertProvider } from './components/context/alert/AlertContext';
import { GithubProvider } from './components/context/github/GithubContext';
import { Alert } from './components/layout/Alert';
import { Footer } from './components/layout/Footer';
import { NavBar } from './components/layout/NavBar';
import { About } from './components/pages/About';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import { User } from './components/pages/User';

function App() {
 return (
  <>
   <GithubProvider>
    <AlertProvider>
     <Router>
      <NavBar title='Github Finder' />
      <div className=' container flex flex-col justify-center h-screen '>
       <main className='container mx-auto px-3 pb-96 '>
        <Alert />
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/user/:login' element={<User />} />
         <Route path='/notfound' element={<NotFound />} />
         <Route path='/*' element={<NotFound />} />
        </Routes>
       </main>
      </div>
      <Footer />
     </Router>
    </AlertProvider>
   </GithubProvider>
  </>
 );
}

export default App;

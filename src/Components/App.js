import '../Styling/App.css';
import Navbar from './Navbar';
import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import Home from './Home';
import Root from './Root';
import Categories from './Categories';

function App() {


  const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path='/categories' element={<Categories/>}/>
    </Route>
  ))
  return (
    <div className="App">
        <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;

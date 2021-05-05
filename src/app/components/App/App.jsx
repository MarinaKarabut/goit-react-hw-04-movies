import "./App.css"
import React, {lazy, Suspense} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from "../../../client/Navbar"
import routes from './routes';
import Loader from '../../../client/Movie/components/Loader'
import NotFoundPage from '../NotFoundPage';
const Home = lazy(()=> import( '../../../client/HomePages'));
const MoviesPage = lazy(()=> import('../../../client/Movie/pages/MoviesPage'));
const MovieDetailsPage = lazy(()=> import( '../../../client/Movie/pages/MovieDetailsPage'));





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
      <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route exact path={routes.movieDetails} component={MovieDetailsPage} />
          <Route exact path={routes.cast} component={MovieDetailsPage} />
          <Route exact path={routes.reviews} component={MovieDetailsPage} />
          <Route component={NotFoundPage} />
      </Switch>

    </Suspense>
       
    </BrowserRouter>
  )
}

export default App

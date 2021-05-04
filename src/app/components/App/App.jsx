import "./App.css"
import React, {lazy, Suspense} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from "../../../client/Navbar"
import routes from '../../../routes';
import Loader from '../../../client/Movie/components/Loader'
const Home = lazy(()=> import( '../../../client/HomePages'));
const MoviesPage = lazy(()=> import('../../../client/Movie/pages/MoviesPage'));
const MovieDetailsPage = lazy(()=> import( '../../../client/Movie/pages/MovieDetailsPage'));
const CastPage = lazy(()=> import('../../../client/Movie/pages/CastPage'));
const ReviewsPage=lazy(()=> import('../../../client/Movie/pages/ReviewsPage'));
const NotFoundPage=lazy(()=> import('../NotFoundPage'));



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={ routes.movies} component={MoviesPage} />
        <Route exact path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path="/movies/:movieId/cast" component={CastPage} />
        <Route path="/movies/:movieId/reviews" component={ReviewsPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
       
    </BrowserRouter>
  )
}

export default App

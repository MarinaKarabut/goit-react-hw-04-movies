import "./App.css"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from "../../../client/Navbar"
import Home from '../../../client/HomePages';
import MoviesPage from '../../../client/Movie/pages/MoviesPage';
import MovieDetailsPage from '../../../client/Movie/pages/MovieDetailsPage';
import CastPage from '../../../client/Movie/pages/CastPage';
import ReviewsPage from '../../../client/Movie/pages/ReviewsPage';
import NotFoundPage from '../NotFoundPage';
import routes from '../../../routes';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={ routes.movies} component={MoviesPage} />
        <Route exact path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path="/movies/:movieId/cast" component={CastPage} />
        <Route path="/movies/:movieId/reviews" component={ReviewsPage} />

        <Route component={NotFoundPage} />
      </Switch>
       
    </BrowserRouter>
  )
}

export default App

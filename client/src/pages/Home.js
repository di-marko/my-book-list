import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../redux/actions/booksActions';
import Loader from '../components/loader';
import { CLEAR_ERRORS } from '../redux/constants/booksConstants';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  //Error handling
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: CLEAR_ERRORS });
    }
  }, [error, dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <div className="ui container">
      {books?.map((book) => (
        <Link className="link" to={`/book/${book?.id}`} key={book?.id}>
          <div className="ui grid">
            <div className="ui row">
              <div className="ui two wide column">
                <img className="ui tiny image" src={book?.cover} alt={book?.title} />
              </div>

              <div className="ui twelve wide column">
                <h3>{book?.title}</h3>
                <p>{book?.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;

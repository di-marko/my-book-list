import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/loader';
import './style.css';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        const {
          data: { book },
        } = await axios.get(`/api/books/${id}`);
        setBook(book);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        alert(
          err.response && err.response.data.message ? err.response.data.message : err.message || 'something went wrong.'
        );
      }
    };

    fetchBookDetails();
  }, [id]);

  return loading ? (
    <Loader />
  ) : (
    <div className="ui container">
      <div className="ui cards">
        <div className="card">
          <div className="image">
            <img src={book?.cover} alt={book?.title} />
          </div>
          <div className="content">
            <div className="header">{book?.title}</div>
            <div className="meta">
              <span className="date">{book?.author}</span>
            </div>
            <div className="description">
              <p>{book?.description}</p>
            </div>
            <div className="extra content">
              <span className="right floated">{book?.pages} pages</span>
              <span>
                <i className="calendar icon"></i>
                {book?.year}
              </span>
            </div>
          </div>
          <a className="ui bottom attached button" href={book?.purchase}>
            <i className="book icon"></i>
            Purchase
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

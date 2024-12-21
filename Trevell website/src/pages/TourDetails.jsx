import React, { useRef, useState } from 'react';
import '../styles/tour-details.css';

import tourData from '../assets/data/tours';
import { useParams } from 'react-router-dom';
import { Col, Container, Form, ListGroup, Row } from 'reactstrap';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);

  // Fetch tour dynamically from static data
  const tour = tourData.find((tour) => tour.id === id);

  if (!tour) {
    return <p>Tour not found!</p>;
  }

  const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    if (!reviewText || !tourRating) {
      alert('Please provide a rating and a review message.');
      return;
    }

    // Replace alert with actual submission logic (e.g., API call)
    console.log({ reviewText, tourRating });
    alert('Review submitted successfully!');

    reviewMsgRef.current.value = '';
    setTourRating(null);
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt={title} className="tour__image" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i className="ri-star-fill" style={{ color: 'var(--secondary-color)' }}></i>
                      {avgRating || 'Not rated'}
                      {totalRating > 0 && <span>({reviews?.length})</span>}
                    </span>
                    <span>
                      <i className="ri-map-pin-user-fill"></i>
                      {address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span><i className="ri-map-pin-2-line"></i>{city}</span>
                    <span><i className="ri-money-dollar-circle-line"></i>${price} per person</span>
                    <span><i className="ri-map-pin-time-line"></i>{distance} km</span>
                    <span><i className="ri-group-line"></i>{maxGroupSize} people</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length || 0} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <span
                          key={rating}
                          onClick={() => setTourRating(rating)}
                          className={`rating-star ${tourRating === rating ? 'selected' : ''}`}
                        >
                          {rating}<i className="ri-star-fill"></i>
                        </span>
                      ))}
                    </div>
                    <div className="review__input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Share your thoughts"
                        required
                        className="form-control"
                      />
                      <button className="btn primary__btn text-white" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>
                  <ListGroup className="user__reviews">
                    {reviews?.map((review, index) => (
                      <div key={index} className="review__item">
                        <img src={avatar} alt="User avatar" className="review-avatar" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.user || 'Anonymous'}</h5>
                              <p>{new Date(review.date || new Date()).toLocaleDateString('en-US', options)}</p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating}<i className="ri-star-fill"></i>
                            </span>
                          </div>
                          <h6>{review.comment || 'No comment provided'}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;

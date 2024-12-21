
import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import worldImg from '../assets/images/world.png';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  const heroContent = {
    subtitle: 'Know Before You Go',
    title: 'Traveling opens the door to creating',
    highlightedText: 'memories',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ut voluptatum quisquam error facilis eum rerum, ratione accusamus molestias fugiat consequatur repellendus pariatur numquam ea dolor! Eligendi sunt ab nostrum?'
  };

  const sections = [
    {
      title: 'What we serve',
      subtitle: 'We offer our best services',
      content: <ServiceList />
    },
    {
      title: 'Our featured tours',
      subtitle: 'Explore',
      content: <FeaturedTourList />
    },
    {
      title: 'With our all experience we will serve you',
      subtitle: 'Experience',
      content: (
        <>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />Quam veniam eveniet voluptate voluptatibus.</p>
          <div className="counter__wrapper d-flex align-items-center gap-5">
            <CounterBox count="12K+" text="Successful trip" />
            <CounterBox count="2K+" text="Regular clients" />
            <CounterBox count="15" text="Years experience" />
          </div>
        </>
      )
    },
    {
      title: 'Visit our customers tour gallery',
      subtitle: 'Gallery',
      content: <MasonryImagesGallery />
    },
    {
      title: 'What our fans say about us',
      subtitle: 'Fans Love',
      content: <Testimonials />
    }
  ];

  return (
    <>
      <HeroSection content={heroContent} />
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
      <Newsletter />
    </>
  );
};

const HeroSection = ({ content }) => (
  <Container>
    <Row>
      <Col lg="6">
        <div className="hero__content">
          <div className="hero__subtitle d-flex align-items-center">
            <Subtitle subtitle={content.subtitle} />
            <img src={worldImg} alt="World" />
          </div>
          <h1>{content.title} <span className="highlight">{content.highlightedText}</span></h1>
          <p>{content.description}</p>
        </div>
      </Col>
      <HeroImage src={heroImg} />
      <HeroVideo src={heroVideo} />
      <HeroImage src={heroImg02} className="mt-5" />
      <SearchBar />
    </Row>
  </Container>
);

const HeroImage = ({ src, className = "" }) => (
  <Col lg="2">
    <div className={`hero__img-box ${className}`}>
      <img src={src} alt="Hero" />
    </div>
  </Col>
);

const HeroVideo = ({ src }) => (
  <Col lg="2">
    <div className="hero__img-box mt-4">
      <video src={src} controls />
    </div>
  </Col>
);

const Section = ({ title, subtitle, content }) => (
  <section>
    <Container>
      <Row>
        <Col lg="12" className="mb-5">
          <Subtitle subtitle={subtitle} />
          <h2 className="section__title">{title}</h2>
        </Col>
        <Col lg="12">
          {content}
        </Col>
      </Row>
    </Container>
  </section>
);

const CounterBox = ({ count, text }) => (
  <div className="counter__box">
    <span>{count}</span>
    <h6>{text}</h6>
  </div>
);

export default Home;
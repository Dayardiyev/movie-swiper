
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper";
import "./App.css"
import star from './star.svg';

const movies = [
  {
      title: "Zack Snyder's Justice League",
      year: 2021,
      genre: "Fiction",
      rating: "8.0",
      tomatometer: 71,
      image: "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
  },
  {
      title: "The Dark Knight",
      year: 2008,
      genre: "Sci-Fi",
      rating: "9.0",
      tomatometer: 94,
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
  },
  {
      title: "Interstellar",
      year: 2014,
      genre: "Sci-Fi",
      rating: "8.6",
      tomatometer: 73,
      image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      rating: "8.8",
      tomatometer: 87,
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
  },  
  {
      title: "The Dark Knight Rises",
      year: 2012,
      genre: "Sci-Fi",
      rating: "8.4",
      tomatometer: 94,
      image: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg"
  },
  {
      title: "The Shawshank Redemption",
      year: 1994,
      genre: "Drama",
      rating: "9.3",
      tomatometer: 91,
      image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
]

const tv = [
  {
      title: "Breaking Bad",
      year: "2008-2013",
      genre: "Crime",
      rating: "9.5",
      tomatometer: 96,
      image: "https://m.media-amazon.com/images/M/MV5BYWI4MzIxYzUtMmIzNC00Mzg0LTgwZTItNTk5YWExODJmZDZiXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg"
  },
  {
      title: "Stranger Things",
      year: "2014-Present",
      genre: "Sci-Fi",
      rating: "8.7",
      tomatometer: 91,
      image: "https://m.media-amazon.com/images/M/MV5BYmFmNDMyODEtNmFjNy00ZjEyLTk3ZDItZTFmMWU3NWViNzNmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
  },
  {
      title: "Game of Thrones",
      year: "2011-2019",
      genre: "Fiction",
      rating: "9.2",
      tomatometer: 89,
      image: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg"
  },
  {
      title: "Friends",
      year: "1994-2004",
      genre: "Comedy",
      rating: "8.9",
      tomatometer: 79,
      image: "https://m.media-amazon.com/images/M/MV5BNDUxNjQyNzYtMjJjZS00MzZhLThlZjEtODRkYWY0OTlhMzY2XkEyXkFqcGdeQXVyMTA3MzQ4MTcw._V1_.jpg"
  },
  {
      title: "The Boys",
      year: "2019-Present",
      genre: "Action",
      rating: "8.7",
      tomatometer: 97,
      image: "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
  },
  {
      title: "Euphoria",
      year: "2019-Present",
      genre: "Drama",
      rating: "8.4",
      tomatometer: 88,
      image: "https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
  },
  
]

const animated =[
  {
      title: "Spider-Man: Into the Spider-Verse",
      year: "2018",
      genre: "Action",
      rating: "8.4",
      tomatometer: 97,
      image: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg"
  },
  {
      title: "WALL·E",
      year: "2008",
      genre: "Drama",
      rating: "8.4",
      tomatometer: 95,
      image: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg"
  },
  {
      title: "Spirited Away",
      year: "2001",
      genre: "Drama",
      rating: "8.6",
      tomatometer: 97,
      image: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
      title: "Up",
      year: "2009",
      genre: "Drama",
      rating: "8.3",
      tomatometer: 98,
      image: "https://m.media-amazon.com/images/M/MV5BMTgyMzE3Nzg2OF5BMl5BanBnXkFtZTcwMzg0Mjc4Mg@@._V1_.jpg"
  },
  {
      title: "Ratatouille",
      year: "2007",
      genre: "Drama",
      rating: "8.1",
      tomatometer: 96,
      image: "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_.jpg"
  },
  {
      title: "Toy Story",
      year: "1995",
      genre: "Drama",
      rating: "8.6",
      tomatometer: 100,
      image: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg"
  },
]

function GetMovie(props){
  return(
      <>
      <div className="item">
        <div className="item-img"><img src={props.image} alt="" /></div>
        <div className="item-text">
            <div className="title">{props.title}</div>
            <div className="item-info">
              <div className="subtitle">{props.year}, {props.genre}</div>
              <div className="rating">
                <div className="num">{props.rating}</div>
                <img src={star} alt="" />
              </div>
              <div className="rating tomatoes">
                <div className="num">{props.tomatometer}%</div>
                <Tomato tomatometer={props.tomatometer}/>
              </div>
            </div>
        </div>
        </div>
      </>
  );
}

function Tomato(props){
  if(props.tomatometer >= 73){
    return <img src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh.75211285dbb.svg" alt="tomato"/>
  } else {
    return <img src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg" alt="tomato"/>
  }
}

function Movie(){
  return(
    <>
      <h1 className="section">Movies</h1>
      <Swiper
            slidesPerView={4}
            spaceBetween={15}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[Autoplay]}
            direction={"horizontal"}
            
            >
              {movies.map(movie => {
                      return (
                      <SwiperSlide>
                        <GetMovie title={movie.title} year={movie.year} image={movie.image} genre={movie.genre} rating={movie.rating} tomatometer={movie.tomatometer}/>
                      </SwiperSlide>
                      )
              })}
          </Swiper>
    </>
  )
}

function TvSeries(){
  return(
    <>
      <h1 className="section">TV Series</h1>
      <Swiper
            slidesPerView={4}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[Autoplay]}
            direction={"horizontal"}
            >
              {tv.map(item => {
                      return (
                      <SwiperSlide>
                        <GetMovie title={item.title} year={item.year} image={item.image} genre={item.genre} rating={item.rating} tomatometer={item.tomatometer}/>
                      </SwiperSlide>
                      )
              })}
          </Swiper>
    </>
  )
}

function Animated(){
  return(
    <>
      <h1 className="section">Animated Movies</h1>
      <Swiper
            slidesPerView={4}
            spaceBetween={15}
            direction={"horizontal"}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[Autoplay]}
            loop={true}
            >
              {animated.map(item => {
                      return (
                      <SwiperSlide>
                        <GetMovie title={item.title} year={item.year} image={item.image}  genre={item.genre} rating={item.rating} tomatometer={item.tomatometer}/>
                      </SwiperSlide>
                      )
              })}
          </Swiper>
    </>
  )
}


export default function App(){
  return (
      <>
          <Movie />
          <TvSeries />
          <Animated />
      </>
  )
}



import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

// class Movie extends Component {
//   //we can validate the type of received data.
//   //props의 데이터 타입과 필수 항목으로 지정할 수 있다. 조건이 만족되지 않았을 때 에러가 뜨도록 한다.
//   static propTypes ={
//     title: propTypes.string.isRequired,
//     poster: propTypes.string.isRequired,
//   }
//   render() {
//     return (
//       <div className="movie">
//         <h1>{this.props.title}</h1>
//         <MoviePoster poster={this.props.poster}/>
//       </div>
//     )
//   }
// }

// class MoviePoster extends Component {
//   render() {
//     return (
//       <img className="movie-poster" src={this.props.poster}/>
//     )
//   }
// }

//위의 class 컴포넌트와 완전히 동일한 역할을 함.
//Dumb functional component라고 한다. 그냥 리턴만 하는 컴포넌트들..
//이들은 state가 없다. 라이프사이클도 없고, render 함수도 없다. 


function Movie({title, poster, genres, summary}) {
  return (
    < div className = "Movie" >
      <div className="Movie_Columns">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie_Columns">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre, index) => <MovieGenres genre={genre} key={index}/>)}
        </div>
        <div className="Movie_Summary">
          <LinesEllipsis
            text={summary}
            maxLine="3"
            ellipsis=" ..."
            trimRight
            BaseOn="letters"
          />
        </div>
      </div>
    </div>
  )
}

function MoviePoster({poster, alt}) { //props를 매개변수로 맏는다. state
  return (
    <img className="Movie_Poster" src={poster} alt={alt}/>
  )
}

function MovieGenres({genre}){
  return (
    <span className="Movie_Genres">{genre} </span>
  ) 
}

Movie.propTypes = {
  title : propTypes.string.isRequired,
  genres : propTypes.array.isRequired,
  rating: propTypes.number.isRequired,
  summary: propTypes.string.isRequired,
}
MoviePoster.propTypes = {
  poster: propTypes.string.isRequired
}
MovieGenres.propTypes = {
  genre: propTypes.string.isRequired
}

export default Movie;
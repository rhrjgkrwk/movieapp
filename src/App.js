import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';





class App extends Component {
  //모든 컴포넌트는 state를 가진다.
  //심플한 룰이 있는데 state가 변경되면 ㄱeact app은 항상 render를 다시 호출한다.
  state = {}


  //모든 컴포넌트는 react에서 만들어놓은 라이프사이클을 따른다.
  //1. 컴포넌트의 생성과 마운트
  // constructor -> componentWillMount(deprecated) -> render -> componentDidMount
  //2. 컴포넌트의 업데이트
  // componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
  
  
  componentDidMount(){
    //Promise를 사용해보자.
    //비동기 프로그래밍.
    // fetch("https://yts.am/api/v2/list_movies.json?quality=3D?sort_by=rating")
    // .then(response => response.json())
    // .then(json => {
    // })
    // .catch(error => console.log(error)) //err 발생 시.
    this._getMovies();
  }

  _renderMovies = () => {
    const movieList = this.state.movies.map((movie)=>{
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres} 
        rating={movie.rating} 
        summary={movie.summary}/>
    })
    return movieList
  }

  //async func을 선언해서. 콜백지옥을 막아보잡.
  _getMovies = async () => {
    const movies = await this._callAPI() //callAPI가 끝나기를 기다린다. 성공이든 아니든.
    //await 이 끝나면 아래 코드를 실행하게 된다.
    console.log("finish await")
    console.log(movies)
    this.setState({
      movies: movies
    })
  }

  _callAPI = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?quality=3D?sort_by=rating")
     .then(response => response.json())
     .then(json => json.data.movies) //이렇게 작성하면return을 자동으로 할 수 있다.
     .catch(error => error)
  }

  render() {
    return (
      <div className={this.state.movies ? "App" : "App-loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    )
  }
}

export default App;

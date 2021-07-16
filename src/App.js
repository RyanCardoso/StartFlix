import React, { Component } from 'react';
import styled from 'styled-components';

//Components
import Movies from './services/movies';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #141414
`;

const Cards = styled.div`
  position: relative;
  width: 230px;
  height: 200px;
  display: flex;
  margin: 10px;
  //overflow: hidden;
  `;

const BoxTitle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 15rem;
  -webkit-text-stroke: 2px gray;
`;

const BoxImg = styled.figure`
  width: 60%;
  height: 100%;
  position: absolute;
  right: 0;
  z-index: 5;
`;

const ImgFilme = styled.img`
  width: 100%;
  height:100%;
  object-fit: cover;
  //object-position: 100% 0;
`;

class App extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const response = await Movies.get();
    console.log(response.data.results);

    this.setState({
      movies: response.data.results
    })
  }

  topFilmes = (item1, index1) => {
    if (index1 < 10) {
      return (
        <Cards>
          <BoxTitle>
            <Title>{index1}</Title>
          </BoxTitle>
          <BoxImg>
            <ImgFilme src={"http://image.tmdb.org/t/p/w300/" + item1.backdrop_path} />
          </BoxImg>
        </Cards>
      )
    }
  }

  render() {
    return (
      <Container>
        {this.state.movies.map((item, index) => this.topFilmes(item, index))}
      </Container>
    )
  }
}

export default App;
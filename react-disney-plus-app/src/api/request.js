const requests = {
    //devlopers themovie db 참고함
    //base url 과 api key 사이에 들어갈 url
    
    fetchNowPlaying: "movie/now_playing",
    fetchTrending: "/trending/all/week",
    fetchTopRated: "/movie/top_rated",
    fetchActionMovies: "/discover/movie?with_genres=28",
    fetchComedyMovies: "/discover/movie?with_genres=35",
    fetchHorrorMovies: "/discover/movie?with_genres=27",
    fetchRomanceMovies: "/discover/movie?with_genres=10749",
    fetchDocumentaries: "/discover/movie?with_genres=99",
}
export default requests;
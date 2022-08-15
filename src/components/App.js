import React from 'react';
import AppItem from './AppItem';
import AppWrapper from './AppWrapper';
import { ThemeContext, themes } from './ThemeContext';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            const { theme, changeTheme } = this.state;

            this.setState(({
              theme:
                theme === themes.dark
                  ? themes.light
                  : themes.dark
            }));
  
            this.setState({ changeTheme: !changeTheme });
        };

        this.state = { 
            error: null,
            isLoaded: false,
            apiKey: 'api_key=bef43a35f0369e6532e4ef01b678f3c9',
            items: [],
            currentPage: 1,
            totalPages: 0,
            page: 0,
            theme: themes.dark,
            toggleTheme: this.toggleTheme,
            changeTheme: themes.dark
        }
    }

    handleChangePage = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    };

    componentDidMount() {
        return this.fetchData();
    }

    componentDidUpdate() {
        return this.fetchData();
    }

    fetchData = () => {
        const { apiKey, currentPage } = this.state;
        const apiPath = `https://api.themoviedb.org/3/movie/popular/?${apiKey}&language=en-US&page=${currentPage}`;
            fetch(apiPath) 
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.results,
                        totalPages: result.total_pages,
                        page: result.page
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                },
            );
    }

    render() {
        const { error, isLoaded, items, totalPages, page } = this.state;
        if(error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return (
                <div className = "container_loader">
                    <span className = "loader">Loading... </span>
                </div>
            );
        } else {
            return (
                <ThemeContext.Provider value={this.state}>
                    <AppWrapper 
                        title = "Favourite Movies"
                        children = {
                            items.map(item => (
                                <AppItem 
                                    key = {item.id}
                                    title = {item.original_title}
                                    popularity = {item.popularity}
                                    imgUrl = {item.poster_path}
                                    alt = {item.original_title}
                                    releaseDate = {item.release_date}
                                    overview = {item.overview}
                                />
                            ))
                        }
                        page = {page}
                        totalPages = {totalPages}
                        handleChangePage = {this.handleChangePage}
                    />        
                </ThemeContext.Provider>
            );
        }
    }
}


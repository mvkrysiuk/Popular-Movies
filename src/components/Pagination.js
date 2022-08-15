import React from 'react';
import { ThemeContext } from './ThemeContext';

export default class Pagination extends React.Component {
    render() {
        const page = this.props.page;
        const totalPages = this.props.totalPages;
        const handleChangePage = this.props.handleChangePage;

        return (
            <ThemeContext.Consumer>
                {({ changeTheme }) => (
                    <div className = "pagination">
                        <button 
                            disabled = {page === 1} 
                            onClick = {() => handleChangePage(page - 1)}
                            className = {changeTheme ? "pagination_btn-dark" : "pagination_btn-light"}
                        >
                            Previous Page
                        </button> 
                        <button 
                            disabled = {page === totalPages} 
                            onClick = {() => handleChangePage(page + 1)} 
                            className = {changeTheme ? "pagination_btn-dark" : "pagination_btn-light"}
                        >
                            Next Page
                        </button> 
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

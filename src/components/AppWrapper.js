import React from 'react';
import Pagination from './Pagination';
import ThemeButton from './ThemeButton';
import { ThemeContext } from './ThemeContext';

export default class AppWrapper extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme, changeTheme }) => (
                    <div style = {{backgroundColor: theme.background}}>
                        <div className = {changeTheme ? "container-dark" : "container-light"}>
                            <header>
                                <h1 className = {changeTheme ? "header_title-dark" : "header_title-light"}>
                                    {this.props.title}
                                </h1>
                                <ThemeButton />
                            </header>
                            <ul className = "render_list">{this.props.children}</ul>
                            <Pagination 
                                page = {this.props.page}
                                totalPages = {this.props.totalPages}
                                handleChangePage = {this.props.handleChangePage}
                            />
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}
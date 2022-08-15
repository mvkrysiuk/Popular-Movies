import React from 'react';
import Image from './Image';
import RateSwitch from './RateSwitch';
import { ThemeContext } from './ThemeContext';

export default class AppItem extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({ changeTheme }) => (
                    <li className = {changeTheme ? "list-dark" : "list-light"}>
                        <h3 className = {changeTheme ? "title_list-dark" : "title_list-light"}>
                            {this.props.title}
                        </h3>
                        <RateSwitch 
                            popularity = {this.props.popularity} 
                        />
                        <Image 
                            imgUrl = {this.props.imgUrl} 
                            alt = {this.props.alt} 
                            releaseDate = {this.props.releaseDate}
                        />
                        <p className = {changeTheme ? "list_overview-dark" : "list_overview-light"}>
                            {this.props.overview}
                        </p>
                    </li>
                )}
            </ThemeContext.Consumer>
        );
    }
}
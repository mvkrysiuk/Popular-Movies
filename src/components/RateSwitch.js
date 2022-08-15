import React from 'react';
import { ThemeContext } from './ThemeContext';

export default class RateSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Popularity: ',
            showRate: false
        }
    }

    handleShowRate = () => {
        this.setState({
            showRate: !this.state.showRate
        });
    }

    render() {
        const { text, showRate } = this.state;
        
        return (
            <ThemeContext.Consumer>
                {({ changeTheme }) => (
                    <div className = "container_popularity"> 
                        <button 
                            className = {changeTheme ? "button_rate-dark" : "button_rate-light"} 
                            onClick = {() => this.handleShowRate()}
                        >
                            {showRate ? 'Hide Rate' : 'Show Rate'}
                        </button> 
                        {showRate && 
                            <p className = "popularity">
                                <span className = {changeTheme ? "popularity_rate-dark" : "popularity_rate-light"}>
                                    {text + this.props.popularity}
                                </span>  
                            </p> 
                        }
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}
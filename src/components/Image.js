import React from 'react';
import PopUp from './PopUp';

export default class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgPath: 'https://image.tmdb.org/t/p/w300',
            showPopUp: false
        }
    }

    togglePopUp = () => {
        const { showPopUp } = this.state;

        this.setState({
            showPopUp: !showPopUp
        });
      }

    render() {
        const { imgPath, showPopUp } = this.state;
        return (
            <>
                <img 
                    onClick={this.togglePopUp.bind(this)}
                    className = "list_img" 
                    src = {imgPath + this.props.imgUrl} 
                    alt = {this.props.alt} 
                />
                {showPopUp ? 
                    <PopUp
                        releaseDate = {this.props.releaseDate}
                        closePopUp = {this.togglePopUp.bind(this)}
                    />
                    : null
                }
            </>
        );
    }
}

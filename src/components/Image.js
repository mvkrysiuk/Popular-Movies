import React from 'react';

export default class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgPath: 'https://image.tmdb.org/t/p/w300'
        }
    }

    render() {
        const { imgPath } = this.state;
        return (
            <img 
                className = "list_img" 
                src = {imgPath + this.props.imgUrl} 
                alt = {this.props.alt} 
            />
        );
    }
}

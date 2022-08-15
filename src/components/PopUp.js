import React from "react";

export default class PopUp extends React.Component {
    render() {
        return (
            <div className="popup">
                <div className="popup_inner">
                    <button onClick={this.props.closePopUp} className="popup_close-btn">+</button>
                    <h3 className="popup_title">Release Date: {this.props.releaseDate}</h3>
                </div>
            </div>
        );
    }
}
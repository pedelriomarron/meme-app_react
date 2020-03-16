import * as React from 'react';

interface IProps {
    name: string;
    image: string;
    post: string
}

interface IState {
    isFetch: boolean
}


export class Meme extends React.PureComponent<IProps, IState> {



    render() {
        return (
            <div className="single-meme">
                <h3> <a href={this.props.post}>{this.props.name}</a></h3>
                <a href={this.props.image} target="_blank"> <img src={this.props.image} alt={this.props.name} /></a>
            </div>
        )
    }
}
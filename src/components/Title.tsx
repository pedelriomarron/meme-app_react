import * as React from 'react';

export class Title extends React.Component<{}, {}> {
    render() {
        return (
            <h1 className="title">{this.props.children}</h1>
        )
    }
}
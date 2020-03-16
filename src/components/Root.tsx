import * as React from 'react';
import { Title } from './Title';
import { MemeContainer } from './MemeContainer';

interface IProps {

}

interface IState {

}


export class Root extends React.PureComponent<IProps, IState> {



    render() {
        return (
            <React.Fragment>
                <Title>Meme App</Title>
                <MemeContainer></MemeContainer>
            </React.Fragment>

        )
    }
}
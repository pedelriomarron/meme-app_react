import * as React from 'react';
import { Meme } from './Meme';
import { getMemesBysubreddit, getMemesBySearch } from '../services/memes';
import { Title } from './Title';
import { Search } from './Search';

interface IProps {
}

interface IState {
    name: string;
    isFetch: boolean,
    memes: any
}


export class MemeContainer extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            name: 'name dep state',
            isFetch: true,
            memes: { memes: [] }
        }
        //Necesario al final
        this.handleSearch = this.handleSearch.bind(this);
    }

    async componentDidMount() {
        console.log("mount")
        this.setState({ name: 'componente montado', memes: await getMemesBysubreddit("memes", 10), isFetch: false })

    }
    componentDidUpdate() {
        console.log("update")
    }


    showMemes() {
        let dom: any = []
        this.state.memes.memes.map((meme: any, i: number) => {
            dom.push(<Meme key={i} name={meme.title} image={meme.url} post={meme.postLink}></Meme>)
        })
        return dom
    }


    // handleSearch(e: React.MouseEvent<HTMLButtonElement>): void {
    async handleSearch(e: string) {
        let response = await getMemesBySearch(e)
        console.log(response)
        console.log(e)
        this.setState({
            memes: response
        })
    }


    render() {
        /*
                if (this.state.isFetch) {
                    return <p>Loading..</p>
                }
        */
        return (


            <React.Fragment>
                <Search handleSearch={this.handleSearch}></Search>
                <p>{this.state.isFetch && 'Loading...'}</p>

                <p>{!this.state.memes.memes.length && 'Nada que mostrar'}</p>

                <section className="memes-container">
                    {this.showMemes()}
                </section>
            </React.Fragment>

        )
    }
}


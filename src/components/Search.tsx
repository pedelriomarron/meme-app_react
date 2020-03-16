import * as React from 'react';

interface IProps {
    //handleSearch: (ev: React.MouseEvent<HTMLButtonElement>) => void
    handleSearch: (str: string) => void

}

interface IState {
    search: string
}


export class Search extends React.PureComponent<IProps, IState> {
    constructor(props: any) {
        super(props)
        this.state = { search: '' }
        //Super necesario
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        console.log(e.target.value)
        this.setState({ search: e.target.value })
    }


    render() {


        return (
            <div className="search-container">
                <input placeholder="Numero de Memes" value={this.state.search} onChange={this.handleChange} type="text" className="search-input"></input>
                <button className="search-btn" onClick={() => this.props.handleSearch(this.state.search)}>Search</button>
            </div>
        )
    }
}
class VisibilibyToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return (
            <div>
                <h2> Visibility Toggle</h2> 
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details': 'Show Details'}</button>
                {this.state.visibility && <p>Here are some details!!</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilibyToggle/>, document.getElementById('app'))

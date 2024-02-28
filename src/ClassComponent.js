import React, {Component} from "react";

class ClassComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search : ''
        }
    }

    render() {
        const options = this.props.options;
        const search = this.state.search;
        return (
            <div>
                <h1>im class component</h1>

                <select name="title" id="title">
                {
                    options.map((val, index) => (
                        <option value={val.id}>{val.title}</option>
                        ))
                    }
                </select>

                <div>{search}</div>
                
                <div>
                    <input type="text" value={search} onChange={(e) => {
                        this.setState(prevState => ({
                            search : e.target.value
                        }))
                    }} />
                </div>
            </div>
        )
    }
}

export default ClassComponent;
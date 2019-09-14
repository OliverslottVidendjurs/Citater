import React from "react"

class Citat extends React.Component {
    render() {
        return (
            <div className="citat">
                <h5>{this.props.citat.title}</h5>
                <p>{this.props.citat.content}</p>
                <div className="row">
                    <div className="col s4">
                        <span className="author">{this.props.citat.author}</span>
                    </div>
                    <div className="col s8">
                        <button onClick={() => { this.props.deleteCitat(this.props.citat.id) }} className="btn red right">Delete</button>
                        <button onClick={() => {this.props.startEditing(this.props.citat.id)}} className="btn yellow right editBtn">Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Citat;
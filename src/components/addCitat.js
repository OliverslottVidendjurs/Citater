import React from "react";

class AddCitat extends React.Component {
    state = {
        title: "",
        content: "",
        author: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //Checks if any of the input field are empty, if they are; throw an alert in their face.
        if(this.state.title === "" || this.state.content === "" || this.state.author === "") {
            alert("An input field cannot be empty!");
            return;
        }

        this.props.addCitat(this.state);

        //Empty the fields
        this.setState({
            title: "",
            content: "",
            author: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input id="title" type="text" onChange={this.handleChange} value={this.state.title} />
                <label htmlFor="content">Citat: </label>
                <input id="content" type="text" onChange={this.handleChange} value={this.state.content} />
                <label htmlFor="author">Author: </label>
                <input id="author" type="text" onChange={this.handleChange} value={this.state.author} />
                <button className="btn green" type="submit">Submit</button>
            </form>
        )
    }
}

export default AddCitat;
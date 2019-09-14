import React from "react";

class AddCitat extends React.Component {
    state = {
        id: null,
        title: "",
        content: "",
        author: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    //This function is apperently considered legacy, but the alternative looks complicated.. ¯\_(ツ)_/¯ 
    componentWillReceiveProps(nextProps){
        if(nextProps.editingCitat !== null){
            document.querySelector("#title").focus();
            this.setState({
                id: nextProps.editingCitat.id,
                title: nextProps.editingCitat.title,
                content: nextProps.editingCitat.content,
                author: nextProps.editingCitat.author
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //Checks if any of the input field are empty, if they are; throw an alert in their face. 
        if(this.state.title === "" || this.state.content === "" || this.state.author === "") {
            alert("An input field cannot be empty!");
            return;
        }

        //Does this modify the state? I sure hope not. (。﹏。*) How does refences work in javascript?
        var citat = this.state;
        if(this.props.editingCitat !== null){
            this.props.editCitat(citat);
        } else {            
            citat.id = Math.random();
            this.props.addCitat(citat);
        }

        //Reset
        this.setState({
            id: null,
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
                <button className="btn green" type="submit">{this.props.editingCitat ? "Edit" : "Add"}</button>
            </form>
        )
    }
}

export default AddCitat;
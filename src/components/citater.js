import React from "react";
import Citat from "./citat";
import AddCitat from "./addCitat";

class Citater extends React.Component {
    //https://www.journaldev.com/240/my-25-favorite-programming-quotes-that-are-funny-too
    state = {
        citater: [{
            id: 1,
            title: "A good programmer",
            content: "A good programmer is someone who always looks both ways before crossing a one-way street.",
            author: "Doug Linder"
        },
        {
            id: 2,
            title: "Psychopaths",
            content: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
            author: "Martin Golding"
        },
        {
            id: 3,
            title: "Debugging",
            content: "If debugging is the process of removing software bugs, then programming must be the process of putting them in. ",
            author: "Edsger Dijkstra"
        },
        {
            id: 4,
            title: "Don't feel down",
            content: "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. ",
            author: "Mosher’s Law of Software Engineering"
        },
        {
            id: 5,
            title: "Two kinds of programming languages",
            content: "There are only two kinds of programming languages: those people always bitch about and those nobody uses. ",
            author: "Bjarne Stroustrup"
        }
        ]
    };

    deleteCitat = (id) => {
        var filteretCitatList = this.state.citater.filter(citat => {
            return citat.id !== id
        });
        this.setState({
            citater: filteretCitatList
        });
    }

    addCitat = (citat) => {
        citat.id = Math.random();
        this.setState({
            citater: [...this.state.citater, citat]
        });
    }

    render() {
        const citatList = this.state.citater.length ? (
            this.state.citater.map(citat => {
                return <Citat key={citat.id} citat={citat} deleteCitat={this.deleteCitat} />
            })
        ) : (
                <p>Ingen citater fundet</p>
            )
        return (
            <div className="row">
                <div className="col s12 m6">
                    <AddCitat addCitat={this.addCitat} />
                </div>
                <div className="col s12 m6">
                    {citatList}
                </div>
            </div>
        )
    }
}

export default Citater;
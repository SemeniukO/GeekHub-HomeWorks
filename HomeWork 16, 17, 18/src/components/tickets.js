import React from 'react';
import {connect} from "react-redux";

class Ticket extends React.Component {
    componentDidMount(){
        function findTodo(todo) {
            return todo._id === this.props.ownProps.match.params.id;
        }

        let ticket = this.props.tikets.find(findTodo.bind(this));
        if (ticket===undefined) {


            let url = window.location.href;
            url = url.slice(url.lastIndexOf("/") + 1);
            fetch('/ticket', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({_id: url})
            }).then((res) => {
                return res.json();
            }).then((res) => {
                this.props.onAddTrack(res)
            })
        }
    }
    render() {

        function findTodo(todo) {
            return todo._id === this.props.ownProps.match.params.id;
        }

        let ticket = this.props.tikets.find(findTodo.bind(this));
        if (ticket===undefined) {
            return(<div>This ticket wasn't found</div>)
        }
        return (
            <div className='listItem'>
            <div><p><span className='textList'>title:</span>{ticket.title}</p>
                <div className='description'><p><span className='textList'>description:</span>{ticket.description}</p>
                    <p><span className='textList'>status:</span> {ticket.status}</p>
                    <p><span className='textList'>date:</span> {ticket.date}</p>
                </div>
            </div>
            </div>
        )

    }
}

export default connect(
    (state, ownProps) => ({
        show: state.show[0],
        disableButton: state.disableButton[0],
        tikets: state.toDoList,
        ownProps
    }),
    dispatch => ({
            onAddTrack: (toDo) => {
                dispatch({type: 'ADD_TODO', payload: toDo});
            }
        })
)(Ticket);
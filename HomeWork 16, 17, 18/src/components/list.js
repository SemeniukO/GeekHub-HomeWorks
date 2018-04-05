import React from "react";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

export class List extends React.Component {

    getDate(){
        this.date = new Date();
        this.date = this.date.getDate() + "." + Number(this.date.getMonth()+1) + "." +this.date.getFullYear();
    }

    onBtnClickHandler(title,e) {
        e.preventDefault();
        this.props.showList(title)
    }

    deleteTicket(title) {
        this.props.delTicket(title);
        fetch('/del-ticket', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id:title})
        })
    }

    edit(title,e){
        e.preventDefault();
        this.props.editShow(title);
        this.props.showList(title);
        this.props.showAll(title);
    }

    save(title,e){
        e.preventDefault();
        this.getDate();
        this.ticket = {
            _id: title,
            title: this['title'+title].value,
            description: this['description'+title].value,
            status: this['status'+title].value,
            date: this.date,
            show: '',
            editShow:'none',
            showAll:''
        };
        fetch('/edit-ticket', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.ticket)
        });

        this.props.editTicket(this.ticket)
    }

    render() {
        return (
            <div className='list'>
                    {this.props.toDoList.map((title, index) =>{
                        return <div className='listItem'key={title._id}>
                            <div>
                                <div  style={{display:title.showAll}}>{<a href='/' onClick={this.onBtnClickHandler.bind(this,title._id)}>{title.title}</a>}
                                <button style={{float:'right'}} > <Link to={`ticket/${title._id}`}>Link</Link></button>
                                <div style={{display:title.show}} className='description'><p ><span className='textList'>description:</span> {title.description}</p>
                                <p ><span className='textList'>status:</span> {title.status}</p>
                                <p ><span className='textList'>date:</span> {title.date}</p>
                                    <button className='buttons' onClick={this.edit.bind(this,title._id)}>edit</button>
                                    <button className='buttons' onClick={this.deleteTicket.bind(this,title._id)}>delete</button>
                                </div>

                            </div>
                                <div  style={{display:title.editShow}}><input
                                    type='text'
                                    className='add__author'
                                    defaultValue={title.title}
                                    ref={(input) => {this['title'+title._id] = input;}}
                                />
                                <textarea
                                    className='add__text'
                                    defaultValue={title.description}
                                    ref={(input) => {this['description'+title._id] = input;}}
                                />
                                    <div><select defaultValue={title.status} ref={(input) => {this['status'+title._id] = input;}}>
                                        <option>new</option>
                                        <option>in progress</option>
                                        <option>done</option>
                                        <option>rejected</option>
                                    </select></div>

                                    <button className='buttons' onClick={this.save.bind(this,title._id)}>save</button>
                                    <button className='buttons' onClick={this.deleteTicket.bind(this,title._id)}>delete</button>
                                </div>

                            </div>

                        </div>}
                        )
                    }
            </div>
        )
    }
}

export default connect(
    state => ({
        toDoList: state.toDoList,
        show: state.show[1]
    }),
    dispatch => ({
        showList: (show) => {
            dispatch({type: 'FIND_TODO', payload: show});
        },
        delTicket: (show) => {
            dispatch({type: 'DELETE_TICKET', payload: show});
        },
        editShow: (show) => {
            dispatch({type: 'EDIT_SHOW', payload: show});
        },
        showAll: (show) => {
            dispatch({type: 'SHOW_ALL', payload: show});
        },
        editTicket: (show) => {
            dispatch({type: 'EDIT_TICKET', payload: show});
        },
    }),
)(List);




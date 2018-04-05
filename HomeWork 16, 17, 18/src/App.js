import {connect} from "react-redux";
import React from "react";
import List from "./components/list"

class AddToDo extends React.Component {
    onBtnClickHandler(e) {
        e.preventDefault();
        this.getDate();
        this.ticket = {
            _id: Math.floor(Math.random() * 100000000),
            title: this.title.value,
            description: this.description.value,
            status: this.status.value,
            date: this.date,
            show: 'none',
            editShow:'none',
            showAll:''
        };
        this.props.onAddTrack(this.ticket);

        fetch('/write-ticket', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.ticket)
        }).then((res) =>{
            return res.json();
        }).then((res)=>{this.props.addId(res)});


        this.title.value = '';
        this.description.value = '';
        this.props.showNone((this.props.show === 'none') ? 'add' : 'none');
        this.props.disableButtonAction(true);
    }

    showForm() {
        this.props.showNone((this.props.show === 'none') ? 'add' : 'none')
    }
    getDate(){
        this.date = new Date();
        this.date = this.date.getDate() + "." + Number(this.date.getMonth()+1) + "." +this.date.getFullYear();

    }

    disableButtonAction(){
        if(this.title.value !== ''){
        this.props.disableButtonAction(false);
        }else this.props.disableButtonAction(true);
    }
    loadBase() {
        fetch('/load-list')
            .then((res) => {
                return res.json();
            }).then((res)=>{
                for(let i=0;i<res.length;i++){
                    this.props.onAddTrack(res[i])}
                }
            )
    }
    render() {
        return (
            <div>
                <div style={{position: 'absolute'}}>
                    <button style={{marginRight:'5px'}}onClick={this.loadBase.bind(this)}>Show List</button>
                    <button className='AddToDoButton' onClick={this.showForm.bind(this)}>Add toDoList</button>
                    <form className={this.props.show}>
                        <input
                            type='text'
                            className='add__author'
                            placeholder='Title'
                            onChange={this.disableButtonAction.bind(this)}
                            ref={(input) => {this.title = input;}}
                        />
                        <textarea
                            className='add__text'
                            placeholder='description'
                            ref={(input) => {this.description = input;}}
                    />

                        <select ref={(input) => {this.status = input;}}>
                            <option  value='new'>new</option>
                            <option value='in progress'>in progress</option>
                            <option value='done'>done</option>
                            <option value='rejected'>rejected</option>
                        </select>

                        <button className='add__btn' disabled={this.props.disableButton} onClick={this.onBtnClickHandler.bind(this)}>
                            Save
                        </button>
                    </form>
                </div>
                <List/>

            </div>
        )
    }
}

export default connect(
    (state,ownProps) => ({
        show: state.show[0],
        disableButton:state.disableButton[0],
        ownProps
    }),
    dispatch => ({
        onAddTrack: (toDo) => {
            dispatch({type: 'ADD_TODO', payload: toDo});
        },
        showNone: (show) => {
            dispatch({type: 'NONE', payload: show});
        },
        disableButtonAction:(show) => {
            dispatch({type: 'DISABLE_BUTTON', payload: show});
        },
        addId:(show) => {
            dispatch({type: 'ADD_ID', payload: show});
        }
    })
)(AddToDo);
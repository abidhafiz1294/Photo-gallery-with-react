import React, { Component } from 'react';
import { Form, Button, Input, Modal, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchComments, updateComments } from '../redux/actionCreators';
import Loading from "./Loading";
const mapDishpatchToProps = (dispatch) => {
    return {
        updateComments: () => dispatch(updateComments()),
        fetchComments: () => dispatch(fetchComments())
    }
}


class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {


        this.props.addComment(this.props.imageId, this.state.rating, this.state.author, this.state.comment);

        this.setState({
            author: '',
            rating: '',
            comment: ''
        });

        event.preventDefault();

    }
    modalToggle = () => {
        this.props.updateComments();
        this.props.fetchComments();
    }


    render() {
        let form = (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Your Name"
                        onChange={this.handleInputChange}
                        required />
                    <br />
                    <Input
                        type="select"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.handleInputChange} >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input
                        type="textarea"
                        name="comment"
                        value={this.state.comment}
                        placeholder="Your Comment"
                        onChange={this.handleInputChange}
                        required>
                    </Input>
                    <br />
                    <Button  color="info" type="submit">Submit Comment</Button>
                </Form>
            </div>
        )
        return (
            <div>
                <div className="container">
                    {this.props.isModalOpen ? <Loading /> : form}
                </div>

                <div>
                    <Modal isOpen={this.props.isModalOpen}>

                        <ModalBody > {this.props.modalMsg} </ModalBody>
                        <Button  color="info" onClick={this.modalToggle}>
                            Close
                    </Button>
                    </Modal>
                </div>

            </div>

        );
    }
}

export default connect(null, mapDishpatchToProps)(CommentForm);
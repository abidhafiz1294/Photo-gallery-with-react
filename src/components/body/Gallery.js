import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import PhotoDetails from './PhotoDetails';
import { Card, Modal, ModalBody, ModalFooter, Button, Alert, } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchComments, fetchPhotos } from '../redux/actionCreators';
import Loading from './Loading';

const mapDishpatchToProps = (dispatch) => {
    return {
        addComment: (imageId, rating, author, comment) => dispatch(addComment(imageId, rating, author, comment)),

        fetchPhotos: () => dispatch(fetchPhotos()),
        fetchComments: () => dispatch(fetchComments()),

    }
}

const mapStateToProps = state => {
    return {
        photos: state.photos,
        comments: state.comments
    }
}


class Gallery extends Component {

    state = {

        selectedPhoto: null,
        modalOpen: false
    }



    onDishSelect = item => {

        this.setState({
            selectedPhoto: item,
            modalOpen: !this.state.modalOpen
        });


    }
    modalToggle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,
            selectedPhoto: null,
        });
    }

    componentDidMount() {

        this.props.fetchPhotos();
        this.props.fetchComments();


    }

    render() {
        document.title = 'Gallery';

        if (this.props.photos.isLoading) {
            return (

                <Loading />

            );
        }
        else if (this.props.photos.errMess) {
            return (
                <Alert color="danger">{this.props.photos.errMess}</Alert>
            )
        }
        else {

            const gallery = this.props.photos.photos.map(item => {

                return (
                    <GalleryItem photo={item} key={item.imageId} DishSelect={() => this.onDishSelect(item)} />
                );
            })

            let photoDetail = null;
            if (this.state.selectedPhoto != null) {

                const comments = this.props.comments.comments.filter(comment => {
                    return comment.imageId === this.state.selectedPhoto.imageId;
                })

                photoDetail = <PhotoDetails photo={this.state.selectedPhoto} comments={comments} isModalOpen={this.props.comments.isModalOpen} modalMsg={this.props.comments.modalMsg}
                    addComment={this.props.addComment} commentsIsLoading={this.props.comments.isLoading} />
            }

            return (
                <div className="container">
                    <div className="row" >
                        <Card style={{ margin: '5px', width: "60rem",}}>
                            {gallery}
                        </Card>
                        
                        <Modal isOpen={this.state.modalOpen} >
                            <ModalBody>
                                {photoDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button  color="info" onClick={this.modalToggle}>
                                    Close
                    </Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                </div>
            );
        }
    }

}
export default connect(mapStateToProps, mapDishpatchToProps) (Gallery);
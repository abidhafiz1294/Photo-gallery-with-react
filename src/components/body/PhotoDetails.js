import React from 'react';
import { Card,CardTitle, CardBody } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';


const PhotoDetails = (props) => {
   
    document.title = "PhotoDetails";
    return (
        <div>
            <Card style={{ marginTop: "5px" }}>
             
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle >
                        <h2 className="text-primary">{props.photo.description}</h2>
                        </CardTitle>
                    <hr />
                    <LoadComments comments={props.comments} commentIsLoading={props.commentIsLoading}/>
                    <hr />
                    <CommentForm imageId={props.photo.imageId} addComment={props.addComment} 
                    isModalOpen={props.isModalOpen} modalMsg={props.modalMsg}/>
                </CardBody>
            </Card>
        </div>

    );
}

export default PhotoDetails;
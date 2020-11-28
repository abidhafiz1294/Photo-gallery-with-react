import React from 'react';
import { CardImg,  CardBody, CardText, Button } from 'reactstrap';

const GalleryItem = props => {
   

    return (

        <div>
            
            
                <CardBody>
                    <CardImg
                        width="60rem"
                        src={props.photo.image}
                    />
                    <br/>
                    
                      <CardText>
                          Description: <h5 className="text-danger">{props.photo.description}</h5> 
                      </CardText>
                      <Button  color="info" onClick={props.DishSelect}>
                          Keep a Comment
                      </Button>
                   
                </CardBody>
            
           
            
           <br/>

        </div>
    );
};
export default GalleryItem;
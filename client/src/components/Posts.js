import React, { Component } from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardText
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux"; // To get state from redux --> react component
import { getPosts, updatePost } from "../actions/postActions";
import PropTypes from "prop-types";

class Posts extends Component {
    static propTypes = {
        getPosts: PropTypes.func.isRequired,
        post: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getPosts();
    }

    onUpdateClick = id => {
        this.props.updatePost(id);
    }

    render() {
        /* post represents entire state object */
        const posts = this.props.post.posts;
        const mostRecentPost= this.props.post.mostRecentPostBody;

        return (
            <Container>
                <Card header outline color="success">
                    <CardHeader tag="h6" className="card-header">
                        Currently Displayed at your Office
                    </CardHeader>
                    <CardBody>
                        <CardText style={{ fontSize: "1.4rem" }}>{mostRecentPost}</CardText>
                    </CardBody>
                </Card>
                <br />
                <ListGroup>
                    <TransitionGroup className="posts-list">
                        {posts.slice(1).map(({ _id, body }) => (
                            <CSSTransition
                                key={_id}
                                timeout={500}
                                classNames="fade"
                            >
                                <ListGroupItem className="list-group-item">
                                    <Button
                                        className="select-btn"
                                        color="success"
                                        size="sm"
                                        onClick={this.onUpdateClick.bind(
                                            this,
                                            _id
                                        )}
                                    >
                                        select
                                    </Button>
                                    {body}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    post: state.post
});

/* State is in postReducer, map state to a property in our react component */
export default connect(
    mapStateToProps,
    { getPosts, updatePost }
)(Posts);

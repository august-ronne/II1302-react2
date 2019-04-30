import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
/* Container: component that is "hooked" to Redux */
import { connect } from "react-redux";
import { addPost } from "../actions/postActions";

class PostModal extends Component {
    state = {
        /* is modal open? */
        modal: false,
        body: ""
    };
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newPost = {
            body: this.state.body
        };
        /* Add post via addPost action */
        this.props.addPost(newPost);
        this.toggle();
    };

    render() {
        return (
            <div style={{ marginLeft: "1rem" }}>
                <Button
                    color="success"
                    style={{ marginBottom: "2rem" }}
                    onClick={this.toggle}
                >
                    Update Office Display
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Update Office Display
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="post">
                                    Write your update below:
                                </Label>
                                <Input
                                    type="text"
                                    name="body"
                                    id="post"
                                    placeholder="Update Office Display"
                                    className="modal-input"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="success"
                                    style={{ marginTop: "2rem" }}
                                    block
                                >
                                    Send
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(
    mapStateToProps,
    { addPost }
)(PostModal);

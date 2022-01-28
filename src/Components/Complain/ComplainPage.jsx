import React, { useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import classes from "./ComplainPage.module.css";
import Select from "react-select";

const ComplainPage = () => {
   

    const options = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },

    ];

    const SubmitDataFun = async (event) => {
        event.preventDefault();
        alert("Data Submitted! Please in console");
    };

    return (
        <div>
            <Container className={classes.displayCenter}>
                <div className={classes.leftside}>
                    <a href="#">Home</a>
                    <a href="#">Applicant's Logout</a>
                    <a href="#">Complain</a>
                    <a href="#">Back</a>
                    <a href="#">Recover Password</a>
                </div>
                <div className={classes.rightside}>
                    <Card className={[classes.mycard, "box-shadow"].join(" ")}>
                        <Card.Header className={classes.mybg}>
                            Complain Box
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={SubmitDataFun}>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Complain ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your complain ID"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Complain Info</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Complain info"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Complain Type</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Complain type"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Complain</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        required
                                        placeholder="Write Complain"
                                        rows={5}
                                    />
                                </Form.Group>

                                <div className={classes.gststatus}>
                                    <div className={classes.innerstatus}>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicEmail"
                                        >
                                            <Form.Label>GST Roll</Form.Label>
                                            <br></br>
                                            <Form.Label>123456</Form.Label>
                                        </Form.Group>
                                    </div>

                                    <div className={classes.innerstatus}>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicEmail"
                                        >
                                            <Form.Label>Application</Form.Label>
                                            <Select
                                                options={options}
                                                required
                                            />
                                        </Form.Group>
                                    </div>

                                    <div className={classes.innerstatus}>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicEmail"
                                        >
                                            <Form.Label>
                                                Password PIN
                                            </Form.Label>
                                            <Select
                                                options={options}
                                                required
                                            />
                                        </Form.Group>
                                    </div>

                                    <div className={classes.innerstatus}>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicEmail"
                                        >
                                            <Form.Label>Payment</Form.Label>
                                            <Select
                                                options={options}
                                                required
                                            />
                                        </Form.Group>
                                    </div>

                                    <div className={classes.innerstatus}>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicEmail"
                                        >
                                            <Form.Label>Complete</Form.Label>
                                            <Select
                                                options={options}
                                                required
                                            />
                                        </Form.Group>
                                    </div>
                                </div>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Complain Status</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Solved/Pending"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Remark</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default ComplainPage;

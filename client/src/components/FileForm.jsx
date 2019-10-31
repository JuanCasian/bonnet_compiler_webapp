import React, { Component } from 'react';
import {
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  Button,
  Spinner,
  Alert
} from 'reactstrap';
import axios from 'axios';

// eslint-disable-next-line react/prefer-stateless-function
export default class FileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loading: false,
      error: '',
      isVisible: false
    };
  }

  onSubmit = e => {
    e.preventDefault();

    const { selectedFile } = this.state;
    const data = new FormData();
    data.append('graph', selectedFile);
    this.setState({ loading: true });
    axios({
      url: '/compiler',
      method: 'POST',
      data
    })
      .then(response => {
        this.setState({ loading: false });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'car.binaryproto');
        document.body.appendChild(link);
        link.click();
      })
      .catch(err => {
        const { data: errorData } = err.response;
        const { msg } = errorData;
        this.setState({ error: msg, loading: false, isVisible: true });
      });
  };

  onChange = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  onDismiss = () => {
    this.setState({
      isVisible: false,
      error: null
    });
  };

  render() {
    const { loading, error, isVisible } = this.state;
    return (
      <Container>
        <Alert color="danger" isOpen={isVisible} toggle={this.onDismiss}>
          {error}
        </Alert>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            {!loading ? (
              <h1 className="mb-4 text-center">
                Upload retrained_graph.pb file
              </h1>
            ) : null}
            <Row>
              <Col xs="3" sm="3" lg="3" />

              <Col xs="6" sm="6" lg="6">
                {loading ? (
                  <Spinner
                    style={{
                      width: '10rem',
                      height: '10rem',
                      position: 'fixed',
                      left: '50%'
                    }}
                    color="dark"
                  />
                ) : (
                  <>
                    <Input
                      className="justify-content-center ml-5 mb-3"
                      type="file"
                      name="file"
                      id="fileInput"
                      onChange={this.onChange}
                    />
                    <Button color="dark" block style={{ marginTop: '2rem' }}>
                      Upload
                    </Button>
                  </>
                )}
              </Col>

              <Col xs="3" sm="3" lg="3" />
            </Row>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

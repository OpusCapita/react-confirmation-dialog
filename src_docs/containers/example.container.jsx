import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import ExampleComponent from '../components/example.component';
import GithubLogo from '../images/logo-github.svg';

export default () => (
  <Grid>
    <Row>
      <Col xs={11} md={8} lg={6}>
        <Row>
          <Col xs={10}>
            <h3>React Confirmation Dialog</h3>
          </Col>
          <Col xs={2}>
            <a
              href="https://github.com/OpusCapita/react-confirmation-dialog"
              style={{ marginTop: '20px', display: 'block' }}
            >
              <GithubLogo />
            </a>
          </Col>
        </Row>
        <Panel>
          <ExampleComponent />
        </Panel>
      </Col>
    </Row>
  </Grid>
);

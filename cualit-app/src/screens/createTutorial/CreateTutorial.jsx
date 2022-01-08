import React, { useState } from 'react';
import connect from './connect';
import styled from 'styled-components';

import Header from '../../components/Header';
import Toast from '../../components/Toast';

import { ErrorType } from '../../constants/errorType';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import { isValidURL } from '../../utils/utils';

const Container = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
`;

const CardContainer = styled(Card)`
  width: 50vw;
  top: 50px;
`;

const CreateTutorial = ({ addTutorial, toastProps, showToast }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [checked, setChecked] = useState(null);

  const create = async () => {
    if (title !== '' && checked !== null) {
      if (video && !isValidURL(video)) {
        showToast({
          status: true,
          message: 'La url es invalida!',
          type: ErrorType.ERROR,
        });
      } else {
        console.log(video);
        const response = await addTutorial({
          title,
          description,
          video,
          published: checked,
        });
        if (response) {
          setTitle('');
          setDescription('');
          setVideo('');
          showToast({
            status: true,
            message: 'El tutorial se creo correctamente!',
            type: ErrorType.SUCCESS,
          });
        }
      }
    } else {
      showToast({
        status: true,
        message: 'El titulo y el estado son requeridos',
        type: ErrorType.WARNING,
      });
    }
  };

  return (
    <Container>
      <Header />
      <Body>
        <CardContainer>
          <Card.Header as="h5">Nuevo Tutorial</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Titulo"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descripción"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Video Url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Video"
                  onChange={(e) => setVideo(e.target.value)}
                  value={video}
                />
              </Form.Group>
              <Form.Label>Como quieres mantener el tutorial?</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="radio"
                  name="flexRadioDefault"
                  label="Oculto"
                  onChange={() => setChecked(false)}
                />
                <Form.Check
                  type="radio"
                  name="flexRadioDefault"
                  label="Publico"
                  onChange={() => setChecked(true)}
                />
              </Form.Group>
              <Button onClick={create} variant="primary">
                Guardar
              </Button>
            </Form>
          </Card.Body>
        </CardContainer>
      </Body>
      {toastProps.show && (
        <Toast
          showToast={showToast}
          message={toastProps.message}
          color={toastProps.type}
        />
      )}
    </Container>
  );
};

export default connect(CreateTutorial);

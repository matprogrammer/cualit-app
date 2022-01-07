import React, { useState } from 'react';
import connect from './connect';
import styled from 'styled-components';

import Header from '../../components/Header';
import Toast from '../../components/Toast';

import { ErrorType } from '../../constants/errorType';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

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

const Title = styled.span`
  color: #363636;
  font-size: 24px;
  font-weight: 500;
  line-height: 50px;
  text-align: left;
  width: 100%;
  margin-top: 30px;
`;

const Input = styled.input`
  height: 30px;
`;

const Submit = styled.span`
  width: 100px;
  text-align: center;
  line-height: 30px;
  height: 30px;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  background: #99cc33;
  margin-top: 25px;
`;

const CardContainer = styled(Card)`
  width: 50vw;
  top: 50px;
`;

const CreateTutorial = ({ addTutorial, toastProps, showToast }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [checked, setChecked] = useState(true);

  const create = async () => {
    if (title !== '' && description !== '') {
      const response = await addTutorial({
        title: title,
        description: description,
        published: checked,
      });
      if (response) {
        setTitle('');
        setDescription('');
        showToast({
          status: true,
          message: 'El tutorial se creo correctamente!',
          type: ErrorType.SUCCESS,
        });
      }
    } else {
      showToast({
        status: true,
        message: 'Todos los campos son requeridos',
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

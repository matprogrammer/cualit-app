import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import connect from './connect';
import styled from 'styled-components';

import Header from '../../components/Header';
import Toast from '../../components/Toast';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Trash } from 'react-bootstrap-icons';

import Button from 'react-bootstrap/Button';

import { ErrorType } from '../../constants/errorType';

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

const DeleteBtn = styled.span`
  position: absolute;
  right: 20px;
`;

const EditTutorial = ({
  editTutorial,
  getTutorial,
  deleteTutorial,
  toastProps,
  showToast,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [checked, setChecked] = useState(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const result = await getTutorial({ id: id });
      if (result) {
        setTitle(result.title);
        setDescription(result.description);
        setVideo(result.video);
        setChecked(result.published);
      }
    }
    fetchData();
  }, []);

  const edit = async () => {
    if (title !== '' && checked !== null) {
      const response = await editTutorial({
        id: id,
        title: title,
        description: description,
        video: video,
        published: checked,
      });
      if (response.success) {
        showToast({
          status: true,
          message: 'El tutorial se modifico correctamente!',
          type: ErrorType.SUCCESS,
        });
      }
    } else {
      showToast({
        status: true,
        message: 'El titulo y el estado son requeridos',
        type: ErrorType.WARNING,
      });
    }
  };

  const tutorialDelete = async () => {
    const response = await deleteTutorial({ id: id });
    if (response.success) {
      showToast({
        status: true,
        message: response.message,
        type: ErrorType.SUCCESS,
      });
      setTimeout(() => {
        history.push('/');
      }, 500);
    }
  };

  return (
    <Container>
      <Header />
      <Body>
        <CardContainer>
          <Card.Header as="h5">
            Editar Tutorial
            <DeleteBtn onClick={tutorialDelete}>
              <Trash color="red" size={18} />
            </DeleteBtn>
          </Card.Header>
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
                  checked={!checked ? true : false}
                  onChange={() => setChecked(false)}
                />
                <Form.Check
                  type="radio"
                  name="flexRadioDefault"
                  label="Publico"
                  checked={checked ? true : false}
                  onChange={() => setChecked(true)}
                />
              </Form.Group>
              <Button onClick={edit} variant="primary">
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

export default connect(EditTutorial);

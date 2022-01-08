import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  List,
  Title,
  TutorialList,
  DeleteBtn,
  EditBtn,
  Data,
  InfoContainer,
  Info,
  InfoText,
  Item,
  InputContainer,
} from './styles/bodySyles';

import { ErrorType } from '../constants/errorType';

import EmptyBanner from '../components/EmptyBanner';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Body = ({ items, isLoading, removeAll, findTutorial, showToast }) => {
  const history = useHistory();
  const [tutorials, setTutorials] = useState(items);
  const [tutorial, setTutorial] = useState(null);
  const [itemSelected, setItemSelected] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTutorials(items);
  }, [items]);

  const selectTutorial = (data) => {
    setItemSelected(data.id);
    setTutorial(data);
  };

  const status = () => {
    if (itemSelected) {
      return tutorial?.published ? 'Publico' : 'Oculto';
    }
    return '';
  };

  const remove = () => {
    removeAll();
    setTutorial(null);
    setItemSelected(false);
  };

  const findTuto = async () => {
    if (title !== '') {
      const response = await findTutorial({ title });
      console.log('find: ', response);
      if (response.length > 0) {
        setTutorials(response);
      } else {
        setTitle('');
        setTutorials(items);
        showToast({
          status: true,
          message: `No encontramos ${title} en nuestros tutoriales!`,
          type: ErrorType.ERROR,
        });
      }
    }
  };

  return (
    <>
      {items.length <= 0 ? (
        <EmptyBanner />
      ) : (
        <>
          <InputContainer>
            <FormControl
              placeholder="Buscar tutorial"
              aria-label="Buscar tutorial"
              aria-describedby="basic-addon2"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              onFocus={() => {
                setTutorial(null);
                setTitle('');
                setItemSelected(false);
                setTutorials(items);
              }}
            />
            <Button onClick={findTuto} variant="outline-secondary">
              Buscar
            </Button>
          </InputContainer>
          <Container>
            <List>
              <Title>Tutoriales</Title>
              {isLoading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <TutorialList>
                  {tutorials &&
                    tutorials?.map((i) => (
                      <Item
                        key={i.id}
                        selected={i.id === itemSelected}
                        onClick={() => {
                          selectTutorial(i);
                        }}
                      >
                        {i.title}
                      </Item>
                    ))}
                </TutorialList>
              )}
              <DeleteBtn onClick={remove}>Eliminar todo</DeleteBtn>
            </List>
            <Data>
              <Title>Tutorial</Title>
              {itemSelected ? (
                <>
                  <InfoContainer>
                    <Info>
                      Titulo: <InfoText>{tutorial?.title}</InfoText>
                    </Info>
                    <Info>
                      Descripción: <InfoText>{tutorial?.description}</InfoText>
                    </Info>
                    <Info>
                      Video URL: <InfoText>{tutorial?.video}</InfoText>
                    </Info>
                    <Info>
                      Estado: <InfoText>{status()}</InfoText>
                    </Info>
                    {itemSelected && (
                      <EditBtn
                        onClick={() =>
                          history.push(`/tutorials/${itemSelected}`)
                        }
                      >
                        Editar
                      </EditBtn>
                    )}
                  </InfoContainer>
                </>
              ) : (
                <Alert variant="primary">
                  Seleccione un tutorial para ver su información aquí!
                </Alert>
              )}
            </Data>
          </Container>
        </>
      )}
    </>
  );
};

export default Body;

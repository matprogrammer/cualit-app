import React, { useEffect, useState } from 'react';
import connect from './connect';
import styled from 'styled-components';

import Header from '../../components/Header';
import Body from '../../components/Body';
import Toast from '../../components/Toast';

import { ErrorType } from '../../constants/errorType';

const Container = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  height: 100vh;
`;

const Home = ({
  getTutorials,
  removeAllTutorials,
  findTutorial,
  tutorialsLoading,
  showToast,
  toastProps,
}) => {
  const [tutorials, setTutorials] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const result = await getTutorials();
      if (result || result.lenght > 0) {
        setTutorials(result);
        setLoading(tutorialsLoading);
      }
      setLoading(tutorialsLoading);
    }
    fetchData();
  }, [reload]);

  console.log(tutorials);

  const deleteAllTutorials = async () => {
    const response = await removeAllTutorials();
    if (response.message) {
      setReload(true);
      showToast({
        status: true,
        message: response.message,
        type: ErrorType.SUCCESS,
      });
    }
  };

  return (
    <Container>
      <Header />
      <Body
        items={tutorials}
        isLoading={isLoading}
        removeAll={deleteAllTutorials}
        findTutorial={findTutorial}
        showToast={showToast}
      />
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

export default connect(Home);

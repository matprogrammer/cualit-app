import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 60%;
  height: 60px;
  background: ${(props) => (props.color ? props.color : 'red')};
  position: absolute;
  bottom: 10px;
  margin: 2%;
  border-radius: 12px;
  text-align: center;
  line-height: 60px;
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin: 0px 20%;
`;

const Toast = ({ message, color, showToast }) => {
  setTimeout(() => {
    showToast({ status: false, message: '', type: '' });
  }, 3000);

  return <Container color={color}>{message}</Container>;
};

export default Toast;

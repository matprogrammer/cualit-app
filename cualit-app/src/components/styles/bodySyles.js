import styled from 'styled-components';
import InputGroup from 'react-bootstrap/InputGroup';


export const Container = styled.div`
    width: 100%;
    height: 80vh;
    flex-direction: row;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const TutorialList  = styled.div`
    width: 100%;
    max-height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    flex-direction: column;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const List  = styled.div`
    width: 40%;
    height: 100%;
    flex-direction: column;
    display: flex;
    margin-right: 30px;
    
`;

export const Data = styled.div`
    width: 40%;
    height: 100%;
    flex-direction: column;
    display: flex;
`;

export const Title = styled.span`
    color: #363636;
    font-size: 24px;
    font-weight: 500;
    line-height: 50px;
    text-align: left;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 20px;
`;

export const Item = styled.div`
    width: 100%;
    text-align: center;
    line-height: 50px;
    height: 50px;
    border: 1px solid #afafaf;
    border-radius: 6px;
    margin: 2px 0;

    background: ${props => props.selected ? "#0d6efd" : "white"};
    color: ${props => props.selected ? "white" : "black"};
    font-weight: ${props => props.selected ? "500" : "300"};
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Info = styled.span`
    color: #363636;
    font-size: 18px;
    font-weight: 500;
    line-height: 50px;
    text-align: left;
    width: 100%;
`;

export const InfoText = styled.span`
    color: #363636;
    font-size: 16px;
    font-weight: 300;
    line-height: 50px;
    text-align: left;
    width: 100%;
`;

export const EditBtn = styled.span`
    width: 140px;
    text-align: center;
    line-height: 30px;
    height: 30px;
    border-radius: 6px;
    color: #99cc33;
    border: 1px solid #99cc33;
    font-weight: 500;
    cursor: pointer;
    margin-top: 15px;
`;

export const DeleteBtn = styled.span`
    width: 140px;
    text-align: center;
    line-height: 30px;
    height: 30px;
    border-radius: 6px;
    color: red;
    border: 1px solid red;
    font-weight: 500;
    cursor: pointer;
    margin-top: 15px;
`;

export const ErrorMessage = styled.span`
    color: #ff4500;
    font-size: 22px;
    font-weight: 500;
    line-height: 50px;
    margin-left: 20px;
    text-align: left;
    width: 100%;
`;

export const InputContainer = styled(InputGroup)`
    width: 82%;
    margin: auto;
`;



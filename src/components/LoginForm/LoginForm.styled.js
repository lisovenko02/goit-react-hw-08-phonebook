import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Forms = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 15px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgba(161, 165, 161, 0.397);
    border-radius: 8px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
`;

export const Fields = styled(Field)`
    margin-top: 10px;
    padding: 10px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 8px;
`
import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

export const getBorderStyledForDate = (startingDate, currentDate, border = '1') =>
((startingDate) > (currentDate - 86400000 * 5)
    ? 'none' : `${border}px solid #eb7979`);


const TodoItemContainerWithWarning = styled(TodoItemContainer)`
    border: ${props => getBorderStyledForDate(new Date(props.createdAt), new Date(Date.now()))};
    border-right: ${props => getBorderStyledForDate(new Date(props.createdAt), new Date(Date.now()), '2')};
    border-bottom: ${props => getBorderStyledForDate(new Date(props.createdAt), new Date(Date.now()), '2')};

`;

const Heading = styled.h3`
    color: ${props => props.isCompleted ? "#73ed73" : "#000000"};
    text-decoration: ${props => props.isCompleted ? "line-through #69d669" : "none"};
`;
const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px; 
`;

const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    color: white;
    display: inline-block;
`;

const RemoveButton = styled(Button)`
    background-color: #eb7979;
    margin-left: 8px;
`;

const CompletedButton = styled(Button)`
background-color: #69d669;
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning;

    return (
        <Container createdAt={todo.createdAt}>
            <Heading isCompleted={todo.isCompleted}>{todo.text}</Heading>
            <p>Created at:&nbsp;
                {(new Date(todo.createdAt).toLocaleDateString())}
            </p>
            <ButtonsContainer>
                {todo.isCompleted
                    ? null
                    : <CompletedButton
                        onClick={() => onCompletedPressed(todo.id)}
                    >Mark As Completed</CompletedButton>}
                <RemoveButton
                    onClick={() => onRemovePressed(todo.id)}
                >Remove</RemoveButton>
            </ButtonsContainer>
        </Container>
    );
};

export default TodoListItem;
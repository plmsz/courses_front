File name `convetion file.styled.js`

# Nesting

```javascript
export const StyledHeader = styled.div`
  background-color: #ebfbff;

  h1 {
    color: red;
  }

  &:hover {
    color: white;
  }
`;
```

## Select childs elements

```javascript
export const Flex = styled.div`
  display: flex;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }
    @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
```

# Props

```javascript
function Header() {
  return (
    <StyledHeader bg='red'>
      <h1>Hubble</h1>
    </StyledHeader>
  );
}
```

```javascript
export const StyledHeader = styled.div`
  background-color: ${({ bg }) => bg};
`;
```

## Buttons with default props or not

```javascript
export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
```

```javascript
<Button bg='#ff0099' color='#fff'>
  Get Started For Free
</Button>
```
# Atributes

```javascript
const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 5 : undefined,
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`

render(
  <>
    <Input small placeholder="Small" />
    <Input placeholder="Normal" />
    <Input padding="2em" placeholder="Padded" />
  </>
)

```

```javascript
export const StyledButton = styled.button`
border: 2px solid #4FFF;
color: #fff;
padding: 15px.
text-align: center;
cursor: pointer;
transition: 0.5s all ease-out;
&:hover {
  background-color: #4caf50;
}
`

export const SubmitedButton = styled(StyledButton).attrs({
  type: 'submit'
})`
box-shadow: 0 9px #999;
&:active {
  background-color: #4caf50
  box-shadow: 0 9px #666;
  transform: translateY(4px);
}
```

# Extended style + render difernt components

```js
import styled from 'styled-components';

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
    border: ${props => (new Date(props.createdAt) > new Date(Date.now() - 86400000 * 5)
        ? 'none' : '1px solid #eb7979;'
    )};
`;

const Heading = styled.h3`
    color: ${props => props.isCompleted ? "#73ed73" : "#000000"};
    text-decoration: ${props => props.isCompleted ? "line-through #69d669" : "none"};
`;


const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning

    return (
        <Container createdAt={todo.createdAt}>
            <Heading isCompleted={todo.isCompleted}>{todo.text}</Heading>
            <p>Created at:&nbsp;
                {(new Date(todo.createdAt).toLocaleDateString())}
            </p>
        </Container>
    )
};

```
## Diferent layout with props

```javascript
export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ layout }) => layout || 'row'};
`

 export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt='' />
      </div>
    </StyledCard>
  )
}


```

# Themes

```javascript
import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`;
```

````javascript
import { ThemeProvider } from 'styled-components';
import { Container } from './styles/Container.styled';
import Header from './components/Header';

const theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333'
  }
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <p>Goodbye, friend</p>
            </Container>
        </ThemeProvider>
  );
}

export default App;
```
````

# Global Styles

```javascript
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic')
;

*{
    box-sizing: border-box;
}

body{
    background: ${({ theme }) => theme.colors.body};
    font-family: 'Poppins', sans-serif;
    margin: 0;
}

`;

export default GlobalStyles;
```

```javascript
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
    mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <p>Goodbye, friend</p>
      </>
    </ThemeProvider>
  );
}

export default App;
```

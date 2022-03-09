Iniciando projeto
yarn create vite projeto --template react-ts
yarn cd ./projeto
yarn install
yarn dev

# Usar um trycatch em cada componente é moroso
<code>

    const Counter = (props: any) => {
    try {
        return <h1>Counter{props.counter.toFixed(2)}</h1>
    } catch (error) {
        return(<h1>Oops, something went wrong!</h1>)
    }
    }
    function App() {

    return (
        <div className="App">
        <Counter/>
        </div>
    )
    }

</code>

# Try Catch abrançando todo o JSX não funciona:

Infelizmente, isso não funciona. E isso porque não somos nós que estamos chamando  <Counter/>. React chama essas função.
Quando os usamos no JSX, estamos simplesmente criando elementos React com essas funções como o tipo.
Dizendo ao React que "se o App for renderizado, aqui estão os outros componentes que precisarão ser chamados". 
Mas não estamos realmente ligando para eles, então o try/catch não funcionará.

Para ser honesto, não estou muito desapontado com isso, porque try/catch é inerentemente imperativo e prefiro uma maneira declarativa de lidar com erros no meu aplicativo de qualquer maneira.
<code>

    try {
      return (
        <div className="App">
        <Counter/>
        </div>
        )
    } catch (error) {
      return <h1>Oops, something went wrong</h1>
    }
</code>

# Error boundary não pode ser usado
- Não usa no event handler, nesse caso usar try catch
- Código assíncrono (ex. callbacks de setTimeout ou requestAnimationFrame)
- Renderização no servidor
- Erros lançados na própria error boundary (ao invés de em seus filhos)

https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react

## Usando a lib
<code>yarn add react-error-boundary</code>

### Para notificar um erro: 

- Gratuito até certo ponto:
https://docs.sentry.io/platforms/javascript/guides/react/
https://docs.bugsnag.com/

## Class component

<code>
    
</code>
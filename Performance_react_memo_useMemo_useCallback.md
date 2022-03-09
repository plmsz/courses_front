# Keys
- As chaves ajudam o React a identificar quais itens sofreram alterações, foram adicionados ou removidos. As chaves devem ser atribuídas aos elementos dentro do array para dar uma identidade estável aos elementos:

<code>
    
    const numbers = [1, 2, 3, 4, 5];

    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
</code>

- Apenas faça isso caso os itens não possuam IDs estáveis:

<code>

    const todoItems = todos.map((todo, index) =>
        <li key={index}>{todo.text}</li>
    ) 
</code>

- Não usar math random
É verdade que às vezes gerar novos ids é redundante e pode ser evitado. Por exemplo, tradução de termos de licença ou lista de colaboradores.
Para ajudá-lo a decidir, reuni três condições que esses exemplos têm em comum:

1. a lista e os itens são estáticos – eles não são computados e não mudam;
2. os itens da lista não possuem ids;
3. a lista nunca é reordenada ou filtrada.

Quando todas condições são atendidos, vocêpode usar com segurança o índice como uma chave.

# memo
- Fluxo de renderização:
  1. recriar uma versão da dom naquele componente 
  2. fazer a comparação 
  3. fazer a mudança
- Diz pro componenete quando o componente pai renderizar, ou estado mudar ou proprieade mudar, antes de entrar no fluxo de renderização, compara as proprieadades e se não mudou NÃO entre no fluxo

Quando usar:
- Pure Functional Components (dado os mesmos parâmetros sempre retornam o mesmo resultado.) ex de retorno diferente: comparação com a data (um countdown), ele usa de recursos externos (do ambiente do usuário), ou seja não é algo que vem das propriedades, logo não é puro
- Re-renders with same props 
- Renders too often ex: inputs controlados, quando armazena algo que o usuário digita no input
- Components muito grandes

# useMemo
- Utiliza uma técnica já conhecida chamada memoization, que consiste em guardar o valor de retorno de uma função a partir dos valores de entrada (Parâmetros). Ou seja, se uma função de soma recebe os parâmetros 2 e 3 e retorna 5, esses valores serão armazenados e, quando essa função for chamada com os mesmos parâmetros, ela não precisará refazer o cálculo para obter o valor de retorno, já que este estará armazenado.
Quando usar:
- Cálculos pesados // o useMemo serve para armazenar um valor
- Igualdade referencial // quando a gente repassa aquela informação a um componente filho*

# shallowCompare
if (oldTitle === newTitle){
  return false //não entra no fluxo
}else{
  return true
}


# useCallback
Quando deve ser utilizado:
- Resolver problemas de igualdade referencial
- Quando temos uma função que precisa ser repassada para os componentes filhos da nossa aplicação.*
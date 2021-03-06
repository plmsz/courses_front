https://www.youtube.com/watch?v=wWeG8rWkMsM
https://ambevtech.udemy.com/course/curso-desenvolvedor-web-completo/learn/lecture/8037990#overview

Crie o projeto
Instale o plugin de SEO Inspect
Instale:
yarn add react-router-dom @types/react-router-dom
yarn add react-helmet-async

# Meta tags

<meta name="description" content="A description of the page" />	Use essa tag para fornecer uma breve descrição da página. Em algumas situações, essa descrição é usada no snippet exibido nos resultados da pesquisa.

# URL canônico

- um URL canônico é o URL da página que o Google considera a mais representativa de um conjunto de páginas duplicadas em um site. Por exemplo, se você tiver URLs da mesma página (example.com?dress=1234 e example.com/dresses/1234), o Google escolherá um deles como canônico. As páginas não precisam ser completamente idênticas. Pequenas mudanças na classificação ou na filtragem de páginas de lista não fazem com que a página seja única (por exemplo, classificação por preço ou filtragem por cor de item).
  O URL canônico pode estar em um domínio diferente da cópia.

<link rel=”canonical” href=”url-canonica.html” />

# Robots

Para impedir que uma página ou outro recurso apareça na Pesquisa Google, inclua um cabeçalho ou uma metatag noindex na resposta HTTP. Na próxima vez que o Googlebot rastrear a página, ele verá a tag ou o cabeçalho e excluirá totalmente essa página dos resultados da Pesquisa Google, mesmo que outros sites tenham links para ela.

Importante: para que a diretiva noindex funcione, a página ou recurso não pode ser bloqueado por um arquivo robots.txt e precisa ser acessível pelo rastreador. Se a página estiver bloqueada por um arquivo robots.txt ou se o rastreador não puder acessar a página, ele nunca verá a diretiva noindex. A página ainda poderá aparecer nos resultados da pesquisa, por exemplo, caso outras páginas tenham links para ela.

- Desabilitar página: 
User-agent: *
Disallow: /admin/

- Ou melhor usar uma metatag na página específico
 <meta name="robots" content="noindex,nofollow">

- Tipo de arquivo desabilitado
User-agent: *
Disallow: / .pdf$


https://developers.google.com/search/docs/basics/get-started?hl=pt-br

Solicitar ao Google um novo rastreamento de URLs
https://developers.google.com/search/docs/advanced/crawling/ask-google-to-recrawl?hl=pt-br


# Sitemap
Os sitemaps são arquivos usados para fornecer informações sobre páginas, vídeos e outros arquivos do site e indicar a relação entre eles. Os mecanismos de pesquisa, como o Google, leem esses arquivos para rastrear seu site com mais eficiência. Os sitemaps informam ao Google as páginas e os arquivos que você considera mais importantes no site, além de fornecer informações valiosas sobre esses arquivos. Por exemplo, quando a página foi atualizada pela última vez e todas as versões em idiomas alternativos dela.

VFocê tb pode criar automaticamente com:
https://www.xml-sitemaps.com/

# Verificar a propriedade do seu site

Hospede o site
Vá até o google search console
https://support.google.com/webmasters/answer/9008080?hl=pt-BR
Copie o link do seu site
Escolha a url
Use o html-tag copie e cole no index.html
Dê push
Deploy
De url do seu sitemap
www.meusite.com/sitemap

# URL

- Ex: www.tudogostoso.com.br/como-fazer-camarao-com-catupiry
- Usar "-" ao invés de "\_"
- Não usar espaços entre palavras
- Sempre letra minuscula

# Title e meta

<title>Receitas Salgada do Tudo Gostoso</title>
<meta name="description" content="Receitas rápidas e fáceis, tortas salgadas, empadão, e muito mais." data-rh="true" />

# Headings
Palavras-chaves devem vim nos heading superiores (h1,h2,h3)

# Img e alts

<img src="./img/camarao-com-catupiry-tudo-gostoso" alt="Foto de camarão com catupiry">

# Links

Não usar botões, links escritos clique aqui, ser o máximo descritivo
- Link em texto
- Com boas palavras chaves
- Link com atributo title (faz aparecer uma tooltip com o title, https://www.w3.org/TR/WCAG20-TECHS/H33.html)

<p> Veja mais detalhes sobre os <Link to="/eventos"> eventos especias </Link></p>

# Meta tag de geolocalização
- https://www.geo-tag.de/generator/en.html

    <meta name="geo.region" content="SV" />
    <meta name="geo.placename" content="San Luis Talpa" />
    <meta name="geo.position" content="13.450925;-89.052405" />
    <meta name="ICBM" content="13.450925, -89.052405" />

___
 # Ferramenta de pesquisa de contéudo
ubber sugestion (https://chrome.google.com/webstore/detail/ubersuggest-seo-and-keywo/nmpgaoofmjlimabncmnmnopjabbflegf?hl=pt-BR)
https://trends.google.com.br/trends/?geo=BR
https://answerthepublic.com/ - as perguntas que as pessoas perguntam no grupo -podem servir de insight para criar contéudo

 ___



Passo A) Lembra do briefing da aula 02? Se você ainda não preencheu com todas as informações, a hora é agora. Tenha o briefing da sua empresa, ou da empresa fictícia, completo.

Passo B) Anote cinco palavras-chave da empresa, produto ou serviço. Comece pelas mais genéricas mesmo.

Passo C) Comece com a pesquisa de uma por uma pelo Google, olhando (e anotando) as seguintes informações do Ubersuggest primeiro.

|. Número de buscas mensais; ||. Perguntas da aba “People Also Ask/As pessoas também perguntam”; |||. Título do site com o maior número de Domain Authority.

Atenção: Todas essas informações só irão aparecer na SERP do Google após você instalar e ativar a extensão do Ubersuggest.

Passo D) Agora abra o Google Trends, e pesquise os mesmos termos que anotou no passo A. Mas filtre a sua pesquisa de acordo com a sua necessidade. Lembre-se dos filtros de localidade e período, por exemplo.

Use a aba “+ Comparar” para ter o resultado: qual palavra-chave tem maior volume de busca?

Passo E) Agora que você já sabe qual palavra-chave tem mais buscas das que anotou, vá ao answer the public e jogue a mesma palavra. Não esqueça de colocar a sua língua e país correto antes de mandar gerar o relatório!

Ao gerar o relatório completo, anote os dados mais relevantes, e com maior busca, das pesquisas relacionadas a sua palavra-chave.


### Otimização off-page
- Gest post
-Link building (troca de links em outros portais)
- Youtube
-Redes sociais
-Google meu negócio

### Ferramentas de mensuração de resultados
- Google Analytics
- Google Search Console
- SEMRush - Essa plataforma é uma das mais utilizadas pelos grandes portais, isso porque ela é uma das mais completas disponíveis no mercado. A plataforma pode te auxiliar a descobrir novas palavras-chave nacionais e locais, e também faz análises de perfis de qualquer domínio. Com ela também é possível fazer uma auditoria do seu SEO técnico (sabe o checklist? Ela faz automaticamente!) e também te dá um monitoramento preciso da sua posição média na SERP.
 - Moz.com - O Moz funciona com basicamente as mesmas funcionalidades do SEMRush, mas ele não tem um suporte brasileiro, o que pode ser um grande empecilho. Em contrapartida, a ferramenta conta com uma extensão gratuita para o navegador Chrome, que te mostrará um resumo analítico dos seus sites já na página de busca do Google.

 ### Práticas condenáveis
 - excesso de palavras chaves no texto (use sinomnimos)
 - conteudo oculto (cor branca em fundo branco, alterar o texto para o tamanho da fonte em zero ou reposicionar o texto para fora da página usando CSS)
 - plágio
 - spam

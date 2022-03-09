https://www.youtube.com/watch?v=wWeG8rWkMsM
https://ambevtech.udemy.com/course/curso-desenvolvedor-web-completo/learn/lecture/8037990#overview

Crie  o projeto
Instale o plugin de SEO Inspect
Instale:
yarn add react-router-dom @types/react-router-dom
yarn add react-helmet-async

# Meta tags
<meta name="description" content="A description of the page" />	Use essa tag para fornecer uma breve descrição da página. Em algumas situações, essa descrição é usada no snippet exibido nos resultados da pesquisa.

# URL canônico
-  um URL canônico é o URL da página que o Google considera a mais representativa de um conjunto de páginas duplicadas em um site. Por exemplo, se você tiver URLs da mesma página (example.com?dress=1234 e example.com/dresses/1234), o Google escolherá um deles como canônico. As páginas não precisam ser completamente idênticas. Pequenas mudanças na classificação ou na filtragem de páginas de lista não fazem com que a página seja única (por exemplo, classificação por preço ou filtragem por cor de item).
O URL canônico pode estar em um domínio diferente da cópia.

<link rel=”canonical” href=”url-canonica.html” />

# Robots não 
Para impedir que uma página ou outro recurso apareça na Pesquisa Google, inclua um cabeçalho ou uma metatag noindex na resposta HTTP. Na próxima vez que o Googlebot rastrear a página, ele verá a tag ou o cabeçalho e excluirá totalmente essa página dos resultados da Pesquisa Google, mesmo que outros sites tenham links para ela.

Importante: para que a diretiva noindex funcione, a página ou recurso não pode ser bloqueado por um arquivo robots.txt e precisa ser acessível pelo rastreador. Se a página estiver bloqueada por um arquivo robots.txt ou se o rastreador não puder acessar a página, ele nunca verá a diretiva noindex. A página ainda poderá aparecer nos resultados da pesquisa, por exemplo, caso outras páginas tenham links para ela.

 <meta name="robots" content="noindex,nofollow">

 https://developers.google.com/search/docs/basics/get-started?hl=pt-br

# Sitemap

 Os sitemaps são arquivos usados para fornecer informações sobre páginas, vídeos e outros arquivos do site e indicar a relação entre eles. Os mecanismos de pesquisa, como o Google, leem esses arquivos para rastrear seu site com mais eficiência. Os sitemaps informam ao Google as páginas e os arquivos que você considera mais importantes no site, além de fornecer informações valiosas sobre esses arquivos. Por exemplo, quando a página foi atualizada pela última vez e todas as versões em idiomas alternativos dela.

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
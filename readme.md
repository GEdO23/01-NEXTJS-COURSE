# Anotações de curso

__SEO:__ Search Engine Optimization

---

## Comandos de execução de scripts:
> - _dev_ - Iniciar o servidor de desenvolvimento
> - _build_ - Compilar o código do projeto para produção
> - _start_ - Iniciar o servidor de produção
> - _lint_ - Executar o linter do Next.js para verificar a qualidade do código
> ---

---

## Tipos de geradores de página:
### SSG - Static Site Generation:

> Pontos positivos:
> + Constrói e renderiza componentes e rotas no momento da compilação (pré-renderização)
> + Todo o conteúdo da rota se torna disponível imediatamente para mecanismos de pesquisa e clientes
> + Maximiza o SEO e o desempenho
> ---

> Pontos negativos:
> - Por ser uma página estática, o conteúdo renderizado não é atualizado após alterações na fonte do conteúdo (API's)
> - Logo, deve ser utilizado somente em páginas que requerem pouca ou nenhuma alteração e o tempo de carregamento é prioridade
> ---

> Exemplos de uso:
> * Página inicial exibida ao cliente
> * Página sobre a empresa/sobre nós
> * Entre outras...
> ---

---

### SSR - Server Side Rendering:
> Pontos positivos:
> + Gera o HTML da página no momento da solicitação do cliente e envia o HTML gerado para o navegador do cliente. O navegador do cliente, então exibe o HTML gerado
> + Útil para melhorar o SEO e acessibilidade da página, pois o conteúdo é carregado mais rapidamente e é mais facilmente indexado pelos mecanismos de pesquisa
> ---

> Pontos negativos:
> - É utilizado em páginas cujo conteúdo deve estar totalmente atualizado em tempo real, e onde o tempo de carregamento não é prioridade
> ---

> Exemplos de uso:
> * Painel de controle do site
> * Página de produtos de uma loja
> * Entre outras...
> ---

---

### ISG - Incremental Static Generation:
+ Combinação de ambos
- Não sei tantos detalhes atualmente...
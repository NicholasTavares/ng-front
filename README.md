# Instruções para rodar frontend

## Requerimentos e recomendações

- Docker instalado na máquina
- Ler este arquivo como preview de um markdown pra melhor compreensão

## Passo a passo

  1. Crie um arquivo .env na raiz do projeto
  2. Copie as seguinte variáveis para o arquivo .env:

  ```
    VITE_API_URL=http://localhost:3000
    VITE_APP_MODE=dev
  ```

  3. Com um terminal aberto na pasta raiz do projeto. Tecle o seguinte comando:

  ```
    docker-compose up -d
  ```

  4. Após por volta de 2 ou 4 minutos, o servidor do frontend estará rodando na porta 5173.

## Observações do projeto

- [Repositório do projeto](https://github.com/NicholasTavares/ng-front)

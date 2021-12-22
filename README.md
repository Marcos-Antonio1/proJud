# Projud

<p align="justify">
Sistema que simula um ambiente de manunteção de processos, o principal intuito de criar esse escopo é realizar uma business transaction com o tratamento de concorrência. O concorrência se dá da seguinte forma:  Um usuário ao editar um processo o bloqueia para a edição dos demais usuários, desta forma a estratégia utilizada é a pessimista uma vez que o recurso que está em uso não pode ser acessado nem alterado, evitando dessa forma o conflito de versões dos processos.
</p>
  
# Tecnologias utilizadas  
  - JavaScript
  - TypeScript
  - NestJs
  - Postgres
  - Swagger
  - Heroku 


# Funcionalidades 
- [:heavy_check_mark:] Criar Técnico
- [:heavy_check_mark:] Editar Técnico
- [:heavy_check_mark:] Criar Processo
- [:heavy_check_mark:] Listar Todos os  Processos
- [:heavy_check_mark:] Listar Processo Específico
- [:heavy_check_mark:] Começar a editar processo (lock recurso)
- [:heavy_check_mark:] Terminar Edição em processo(unlock recurso)
- [:heavy_check_mark:] Autenticação e autorização

# Diagrama de sequência
<div align = "center">
  <img src="https://user-images.githubusercontent.com/33884828/147161337-c2e8ee39-ff13-435d-a603-775dde63df13.png"> 
</div>

# Diagrama de Componentes
<div align = "center">
  <img src="https://user-images.githubusercontent.com/33884828/147161511-a359f627-4a72-4a72-9e41-9e327b77c7c5.png"> 
</div>

# Preview Telas
<p align="center">
  <img src="https://user-images.githubusercontent.com/33884828/147135011-e3cd1239-6bf2-417f-b6d6-a5a9640d21d3.png" width="350" title="hover text">
</p>

# Status do projeto 
- [:heavy_check_mark:] Concluído :rocket:
# Testar
## Este projeto está disponivel em 
[Projud](https://projudi.herokuapp.com/api/)

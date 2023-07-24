# Laravel Portifolio

<p align="center">
<img width="40%" src="https://github.com/ThiagoCrepequer/laravel-portifolio/assets/45575737/c832851a-2da6-4b4b-b7d5-f384c934b731" /> <img width="40%" src="https://github.com/ThiagoCrepequer/laravel-portifolio/assets/45575737/aed98c09-31de-4d3b-91cd-dbcd2377c6ef"/>
<img width="40%" src="https://github.com/ThiagoCrepequer/laravel-portifolio/assets/45575737/c040dd4c-e05f-407a-877b-c3ab4bf5d6e5" /> <img width="40%" src="https://github.com/ThiagoCrepequer/laravel-portifolio/assets/45575737/de592ad0-601e-42de-8f4d-23251fc3c91f" />
</p>

## Descrição
Neste projeto, desenvolvi um portfólio pessoal acompanhado por um blog integrado ao Notion para criação e edição de posts. Para o backend, escolhi o framework Laravel, enquanto para o frontend, utilizei o React. Essas escolhas permitiram criar uma plataforma dinâmica, facilitando a gestão de conteúdo e proporcionando uma experiência de usuário fluida e interativa.
## Tecnologias utilizadas
 - <img width="20" src="https://github.com/ThiagoCrepequer/laravel-portifolio/assets/45575737/99ab0402-c6bb-4673-8ace-d77a719f66a3)"/> Laravel 
 - <img width="20" src="https://github.com/ThiagoCrepequer/laravel-portifolio/assets/45575737/7ce121fc-4ad9-4f08-8936-a0b4adcb2669"/> React 
 - <img width="20" src="https://github.com/ThiagoCrepequer/laravel-portifolio/assets/45575737/cfff9762-bf14-40ac-93a8-501e3912fe8e"/> Inertia 
 - <img width="20" src="https://github.com/ThiagoCrepequer/laravel-portifolio/assets/45575737/3e8b8433-4aac-4942-8707-75f5f81d3338" /> Tailwind
 - <img width="20" src="https://github.com/ThiagoCrepequer/laravel-portifolio/assets/45575737/80601fa4-ae10-4caf-9335-59ca4daa12c7" /> MySQL

## Principais features
 - CMS (Content Management System) próprio, criado do zero;
 - Integração com o Notion para os posts do blog;
 - Aba de contato via Email automática;
## Instalação
 - Após clonar o repositório, acesse o diretório raiz e instale as dependências do Laravel `composer install`
 - Faça uma cópia do arquivo '.env.example', renomeie para '.env' e preencha os campos com as suas informações para o MySQL e para o serviço de Email.
 - Migre as tabelas para o banco `php artisan migrate`
 - Instale as dependencias do React `npm install`
 - Execute o Vite e o Laravel `php artisan serve` e `npm run dev`

# Todos Conectados

Iniciativa social para facilitar el trabajo remoto como respuesta a la contingencia del Virus Covid-19. Landing Page desarrollada con `ember.js`.

## Índice

* [Acerca del proyecto](https://github.com/todosconectados/landing#acerca-del-proyecto)

## Dependencias

Instala las siguientes dependencias para ejecutar el proyecto en tu ambiente de desarrollo:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)

## Instalación

* `git clone <repository-url>` este repositorio
* `cd landing`
* `npm install`

## Configurando tu ambiente de desarrollo

Genera un nuevo archivo llamado `.env` en la carpeta principal del proyecto. Llena las variables de ambiente en base al archivo `.env.sample` antes de iniciar la aplicación.

## Servidor de desarollo

* `ember serve`
* Visita tu aplicación en [http://localhost:4200](http://localhost:4200).

## Lint

Esta aplicación utiliza `eslint` para estilo de código js. Para validar tu aplicación, ejecuta:

- `npm run eslint .`

## Deploy

Esta aplicación utiliza los plugins de `ember-cli-deploy-s3` y `ember-cli-deploy-cloudfront` para deploy en stage y producción. Asegúrate que las configuraciones correspondientes se encuentren en tu archivo `.env` antes de ejecutar un deploy. Posteriormente, ejecuta:

```
npm run deploy:production
```

## Acerca del Proyecto

Iniciativa social para crear un servicio gratuito de conferencias telefónicas. El proyecto cuenta ya con:

* [x] README.md
* [x] Etiquetas estándar en la sección de *issues*.
* [x] Proyecto en Ember 2 base.
* [x] LICENCIA
* [x] CONTRIBUTION.md

## ¿Cómo ayudar?
Para contribuir revisa la [Guia de Contribución](https://github.com/todosconectados/landing/blob/master/CONTRIBUTING.md) donde encontrarás la información fundamental para comenzar a contribuir en los proyectos.

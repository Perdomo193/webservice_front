![](https://github.com/Perdomo193/webservice_front/blob/main/static/img/logo_vo.png)

<h2 align="center">Vision Online Prueba Tecnica - Pablo Alejandro Perdomo</h2>

La webservice de la prueba tecnica, está diseñada en una arquitectura bajo el modelo MVC (Modelo Vista Controlador) que permite reutilizar el código y reduce el uso del código del servidor. Dentro de la capa del “modelo” se utiliza un servicio RESTful (API) para obtener los datos. En la capa “vista” se utiliza HTML5, CSS3 y Framework Bootstrap.Finalmente, la capa “controlador” usa Framework Vue JS.Estas características permiten compartirse como código multi-plataforma.
  
## Dependencias

#### Instalar
`npm install`

#### Iniciar servidor en localhost:8000
`npm run build`

`npm run start`

## Herramientas

El framework `Vue JS` es implementado en el desarrollo front del servicio web, construido con `CSS3`, `HTML5` y `Bootstrap` . Se utiliza el marco de aplicación web `Nuxt JS`, el cual permite el renderizado en el servidor.

<p align="center"><a href="#"><img width="450px" height="auto" src="https://github.com/Perdomo193/images/blob/master/page_six.png" alt="build status"></img></a></p>

## Vistas

Se tiene un menu de navegación, como se muestra en la Figura 1. En el menu se tiene el boton Exercise 1, el cual muestra la Figura 1. En este se da click en `Browse` y seleccionamos a la imagen a procesar. En el selector definimos que tipo de procesamiento se aplicara a la imagen, comos se muestra en la Figura 2.

<p align="center">Figura 1 Vista Ejercicio 1</p>

<p align="center"><a href="#"><img width="850px" height="auto" src="https://github.com/Perdomo193/images/blob/master/page_one.png" alt="build status"></img></a></p>

<p align="center">Figura 2 Vista Ejercicio 1</p>

<p align="center"><a href="#"><img width="850px" height="auto" src="https://github.com/Perdomo193/images/blob/master/page_two.png" alt="build status"></img></a></p>

## Ejercicio 1

Se carga la imagen a procesar en la vista de navegación (ver Figura 1). El front-end envia la imagen y sus datos al back-end, el back almacena en el Storage del equipo la imagen. Se selecciona en el front-end el tipo de proceso a aplicar en la imagen, por ejemplo: canny y findcircles, y se envia esta información al back-end. El back-end envia al cliente TCP, información de la imagen y el proceso a aplicar sobre esta. El cliente TCP procesa la imagen y retorna al back-end informacion de la imagen procesada. El back-end almacena en el Storage la imagen procesada y en la base de datos la informacion de las imagenes. Finalmente el back-end retorna al front-end información de la imagen procesada, vizualizandose en el navegador esta imagen. La Figura 3 describe el flujo de información entre componentes.

Nota: Se utilizo un cliente TCP como suplente de HALCON en el procesamiento de la imagen, dado que la licencia expiro en el primer dia de uso. 

## Ejercicio 2

Se cargan las coordenadas de las regiones de interes a resaltar y la imagen a procesar (ver Figura 2). El front-end envia al back-end las coordenadas e imagen, en la base de datos se almacenan coordenadas y en el Storage la imagen a procesar. El back-envia al cliente TCP el tipo de region de interes y sus coordenadas. El cliente TCP construye sobre una imagen las regiones de interes, y retorna la imagen procesada al back-end. El back-end almacena en el Storage la imagen procesada y envia al front-end la información de esta, vizualizandose la imagen procesada. La Figura 3 describe el flujo de información entre componentes.

<p align="center">Figura 3 Vista Arquitectura</p>

<p align="center"><a href="#"><img width="850px" height="auto" src="https://github.com/Perdomo193/images/blob/master/page_five.png" alt="build status"></img></a></p>




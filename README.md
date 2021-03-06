![](https://github.com/Perdomo193/webservice_front/blob/main/static/img/logo_vo.png)

<h2 align="center">Vision Online Prueba Tecnica - Pablo Alejandro Perdomo</h2>

La webservice de la prueba tecnica, está diseñada en una arquitectura bajo el modelo MVC (Modelo Vista Controlador) que permite reutilizar el código y reduce el uso del código del servidor. En la capa “vista” se utiliza `HTML5` y Framework `Bootstrap`. Finalmente, la capa “controlador” usa Framework `Vue JS`. Estas características permiten compartirse como código multi-plataforma.
  
## Dependencias

#### Instalar
`npm install`

#### Iniciar servidor en localhost:8000

`npm run build`

`npm run start`

## Herramientas

El framework `Vue JS` es implementado en el desarrollo front del servicio web, incluyendo `HTML5` y `Bootstrap` . Se utiliza el marco de aplicación web `Nuxt JS`, en el renderizado por servidor.

<p align="center"><a href="#"><img width="450px" height="auto" src="https://github.com/Perdomo193/images/blob/master/page_six.png" alt="build status"></img></a></p>

## Vistas

Se tiene un menu de navegación, como se muestra en la Figura 1. En el menu se tiene el boton Ejercicio 1 referido al ejercicio 1, y el boton Ejercicio 2 referido al ejercicio 2. En la ventana Ejercicio 1 se da click en `Browse` y se selecciona la imagen a procesar. En el selector se define el tipo de procesamiento a aplicar sobre la imagen, como se muestra en la Figura 2. 

<h3 align="center">Figura 1 Vista Ejercicio 1</h3>

<p align="center"><a href="#"><img width="850px" height="auto" src="https://github.com/Perdomo193/images/blob/master/page_10.png" alt="build status"></img></a></p>

<h3 align="center">Figura 2 Vista Ejercicio 1</h3>

<p align="center"><a href="#"><img width="850px" height="auto" src="https://github.com/Perdomo193/images/blob/master/page_21.png" alt="build status"></img></a></p>

En la ventana Ejercicio 2 se da click en `Browse` y se selecciona la imagen a procesar, como se muestra en la Figura 3, 4, 5 y 6. Luego se ingresan las coordenadas de la region a procesar: 

`Circulo`: Se ingresa el punto central o centro de masa de la region, a traves de las coordendas `Centro X` y `Centro Y`; además se ingresa el valor del radio en `Radio`. 

`Hexagono`: Se ingresa el centro de masa de la region, a traves de las coordenadas `Centro X` y `Centro Y`; además se ingresa el valor del aportema en `Apotema`.

`Triangulo`: Se ingresa el centro de masa de la region, a traves de las coordenadas `Centro X` y `Centro Y`; además se ingresa el valor de la base en `Base` y la altura en `Altura`.

`Rectangulo`: Se ingresa el valor del vertice superior izquierdo de la region en `Vertice_aX` para el eje X y `Vertice_aY` para el eje Y. Se ingresa el valor del vertice inferior derecho de la region en `Vertice_bX` para el eje X y `Vertice_bY` para el eje Y.

Luego de ingresar los valores de las coordenadas, se da click en `Aplicar`, y con ello se ejecuta el procesamiento de a imagen y se muestra esta en el navegador.

<h3 align="center">Figura 3 Vista Ejercicio 2</h3>

<p align="center"><a href="#"><img width="850px" height="auto" src="https://github.com/Perdomo193/images/blob/master/page_11.png" alt="build status"></img></a></p>

<h3 align="center">Figura 4 Vista Ejercicio 2</h3>

<p align="center"><a href="#"><img width="850px" height="auto" src="https://github.com/Perdomo193/images/blob/master/page_12.png" alt="build status"></img></a></p>

<h3 align="center">Figura 5 Vista Ejercicio 2</h3>

<p align="center"><a href="#"><img width="850px" height="auto" src="https://github.com/Perdomo193/images/blob/master/page_13.png" alt="build status"></img></a></p>

<h3 align="center">Figura 6 Vista Ejercicio 2</h3>

<p align="center"><a href="#"><img width="850px" height="auto" src="https://github.com/Perdomo193/images/blob/master/page_14.png" alt="build status"></img></a></p>

## Ejercicios

<h3 align="center">Ejercicio 1</h3>

Se carga la imagen a procesar en la vista de navegación (ver Figura 1). El front-end envia la imagen y sus datos al back-end, el back almacena en el Storage del equipo la imagen. Se selecciona en el front-end el tipo de proceso a aplicar en la imagen, por ejemplo: canny y findcircles, y se envia esta información al back-end. El back-end envia al servicio TCP, información de la imagen y el proceso a aplicar sobre esta. El servicio TCP procesa la imagen y retorna al back-end informacion de la imagen procesada. El back-end almacena en el Storage la imagen procesada y en la base de datos la informacion de las imagenes. Finalmente el back-end retorna al front-end información de la imagen procesada, vizualizandose en el navegador esta imagen. La Figura 3 describe el flujo de información entre componentes.

Nota: Se utilizo un servicio TCP como suplente de HALCON en el procesamiento de la imagen, dado que la licencia expiro en el primer dia de uso. El servicio TCP emula el programa de HALCON, donde se establecieron algunos ejercicios de procesamiento de imagenes. 

<h3 align="center">Ejercicio 2</h3>

Se cargan las coordenadas de las regiones de interes a resaltar y la imagen a procesar (ver Figura 2). El front-end envia al back-end las coordenadas e imagen, en la base de datos se almacenan coordenadas y en el Storage la imagen a procesar. El back-envia al servicio TCP el tipo de region de interes y sus coordenadas. El servicio TCP construye sobre una imagen las regiones de interes, y retorna la imagen procesada al back-end. El back-end almacena en el Storage la imagen procesada y envia al front-end la información de esta, vizualizandose la imagen procesada. La Figura 3 describe el flujo de información entre componentes.

<p align="center">Figura 7 Vista Arquitectura</p>

<p align="center"><a href="#"><img width="850px" height="auto" src="https://github.com/Perdomo193/images/blob/master/page_22.png" alt="build status"></img></a></p>

## Links Back-end y Servicio TCP

Debe ingresar al `servicio TCP` en el siguiente link:

https://github.com/Perdomo193/webservice_tcp

Debe ingresar al `webservice-backend` en el siguiente link:

https://github.com/Perdomo193/webservice_backend



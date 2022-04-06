## Tuesday

**1. Read the following resources about Node.JS and explain what's Node.JS in your own words:**

- [Resource 1](https://nodejs.dev/learn)
- [Resource 2](https://www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/)

Node.js es un ambiente de ejecución de JavaScript, para poder desarrollar utilizando JavaScript por el lado del servidor, recordando que JS es monohilo tambien va a estar basado en asincronismo, bastante útil para diferentes proyectos, corre el motor v8 de chrome, que es el corazon de distintos navegadores, lo que hace a Node muy poderoso.

Provee de un set de instrucciones para trabajar con asincronismo, debido a que no puede crear multiples hilos de procesos, para no sufrir bloqueos en nuestro código.

<hr>
<br>

**2. Answer the question: What is the V8 Javascript Engine? (Use your own words)**

Es un motor para JavaScript que es el corazón de algunos navegadores web como chrome, pero también es utilizado para construir aplicaciones del lado del servidor con herramientas como NodeJS, recoredemos que las computadoras no pueden correr JavaScript por si solas, solo entienden código máquina y alguien tiene que hacer el trabajo para que nuestra computadora entienda, y para eso está el motor V8

<hr>
<br>

**3. Answer the question: What is NVM and Why is it useful for Node.JS developers?**

De sus siglas en ingles **_Node Version Manger_**, es un script bash utilizado para administrar distintas versiones de Node, entre ellas estan las opciones de instalar, cambiar de version a utilizar o tambien desinstalar, es útil para los desarrolladores ya que algunas dependencias que se necesitan en el proyecto solo son soportada por una versión en especifico de Node.

<hr>
<br>

**4. Learn about the Node.JS module system, you can start here.**

Node nos permite importar o crear modulos, esto dependiendo lo que necesitemos, por defecto trae modulos cuando instalamos Node, pero tenemos la posibilidad de utilizar algunos otros modulos que vamos requiriendo instalar a medida de que crece nuestro proyecto

En node cada archivo es tratado como un modulo distinto, dentro de este podemos incluir la lógica que necesitemos mas adelante, esto es util para no tener archivos con demaciadas lineas y que sean dificiles de mantener.

<hr>
<br>

**5. Read about the different types of Node.JS modules**

En Node tenemos dos formas de tener modulos, la primera es **CommonJS** y **ECMAScript Modules**

Los archivos con extensión `.cjs`, archivos con extension `.js`, estos deben de ser habilitados en el archivo de configuracion **package.json** en las primeras lineas con el valor de `type` como `"commonjs"`

Llamos a los moduloes de **CommonJS** con **_require()_**, mientras que los modulos de **ECMAScript** los vamos a llamar utilizando **_import()_**

<hr>
<br>

**6. Explain the differences between ESModules and CommonJS modules**

<hr>
<br>

**7. Create your own Local Node.JS module. The module must contain a function that calculates the sum of two numbers. Use the previously created function in another file in any way.**

<hr>
<br>

**8. Watch [this](https://www.youtube.com/watch?v=h-n_gyyNly8) video about the Client-Server architecture.**

<hr>
<br>

**_[<-- Go Back](../week9/README.md)_**

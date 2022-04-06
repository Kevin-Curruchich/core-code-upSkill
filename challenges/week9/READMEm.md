## Monday

**1. Watch this [video](https://www.youtube.com/watch?v=N3AkSS5hXMA&ab_channel=ProgrammingwithMosh)**

React es una libreria para construir interfaces de usuario de manera rapida, es una libreria bastante demandada, es una buena opcion para conseguir trabajo. Es una libreria basada en componentes, para construir interfaces de usuario con componentes reutilizables, podemos tener tantos como sean necesarios, podemos tener componentes hijos, que están dentro de otro componente.

Tenemos dos formas de poder crear piezas de la interfaz de usuario, una puede ser creando un componente de funcion o componente de clase

<hr>
<br>

**2. Watch this [video](https://www.youtube.com/watch?v=hQAHSlTtcmY&ab_channel=WebDevSimplified)**

React Projecto Done

**Aprendido**

- Hooks
- Ciclo de vida de un componente

<br>
<hr>

**3. [React kata](https://www.codewars.com/kata/5a95947f4a6b342636000173)**

```
Challenge
Learn about nesting and listing React components.

The component EggList will set a prop called eggs which is an array of your favourite easter eggs e.g. "Lindt".
Loop through the props.eggs to output a unorder list of Easter eggs.
Each list item should be a component called EasterEgg with a prop name, to render the name in a li tag.
Each EasterEgg will need a key prop with a unique id. Use the index of the array for now.
About keys in React lists
While you can use the index of the array for a key because they should be unique among their siblings. However it is better to use unique values.

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
```

**Solution:**

```javascript
import React from "react";

export const EggList = ({ eggs }) => {
  return (
    <ul>
      {eggs.map((e, i) => {
        return <EasterEgg key={i} name={e} />;
      })}
    </ul>
  );
};

export const EasterEgg = ({ key, name }) => {
  return <li key={key}>{name}</li>;
};
```

<br>
<hr>

**_[<-- Go Back](../week9/README.md)_**

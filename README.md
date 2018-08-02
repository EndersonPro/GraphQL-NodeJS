# Ejemplo del uso de GraphQL

### Para desplegar este ejemplo en tú computador solo debes seguir estos pasos:

Abre un nuevo terminal y pega la siguente linea de comando.

- `git clone https://github.com/EndersonPro/GraphQL-NodeJS.git `

- ` cd GraphQL-NodeJS`

- Para instalar las dependencias necesarias

  ~~~
  npm i 
  ~~~

- para ejecutar.

  ~~~
  node index.js 
  ~~~

Abre en tu navegador 

```
http://localhost:3000/graphql
```

#### Ejemplo de uso

Query Variables

```json
{
    "courseID": 1
}
```

o

```json
{
    "courseTopic": "Javascript"
}
```

### Consulta

```java
query getSingleCourse($courseID: Int!){
    Course(id: $courseID){
        title
        author
        topic
        url
    }
}
```
#### Resultado...

```json
{
  "data": {
    "Course": {
      "title": "Nodejs Curso",
      "author": "Enderson Vizcaino",
      "topic": "Javascript",
      "url": "http://facebook.com"
    }
  }
}
```

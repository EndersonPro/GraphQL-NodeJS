const express = require("express")
const app = express()

const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql')


const { cursos } = require('./data.json')



const schema = buildSchema(`
    type Query{
        Course(id: Int!): Course
        Courses(topic: String): [Course]
    }
    type Course {
        id: Int
        title: String
        author: String
        topic: String
        url: String
    }
`)

let getCourse = (args) => {
    let id = args.id;

    return cursos.filter(course => {
        return course.id == id;
    })[0]
}

let getCourses = (args) => {
    if(args.topic){
        let topic = args.topic;
        return cursos.filter(course => course.topic);
    }else{
        return cursos;
    }
}

const root = {
    Course:getCourse,
    Courses: getCourses
}

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), () =>
  console.log("Server on port ", app.get("port"))
);

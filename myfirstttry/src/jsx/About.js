import "./App.css"
function About(props){
    return(<>
    {props.children}
     <h2> {props.heading}this is my about page</h2>
     <p> {props.paragraph}Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, temporibus non incidunt dolores vero quo. Dolor consequatur natus magnam dignissimos!</p>
     <img src={props.image} alt="" />
    </>)
}

export default About;
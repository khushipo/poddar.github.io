import About from "./About"
function PropsFile(){
    const any=[
        {id:"e4",
        heading:"jai mata dii this is my first heading app 1111",
        paragraph:"this is my first paragraph is start with a  lorem12 ",
        image:"../img/akshya.jpg",
    
    },
        {id:"e3",
        heading:"jai mata dii this is my first heading app 1111",
        paragraph:"this is my first paragraph is start with a  lorem12 ",
        image:"../img/akshya.jpg",
    
    },
        {id:"e2",
        heading:"jai mata dii this is my first heading app 1111",
        paragraph:"this is my first paragraph is start with a  lorem12 ",
        image:"../img/akshya.jpg",
    
    },
]
    return (<>
       <About heading={any[0].heading} paragraph={any[0].paragraph} image={any[0].image}/>
       <About heading={any[1].heading} paragraph={any[1].paragraph} image={any[1].image}/>
       <About heading={any[2].heading} paragraph={any[2].paragraph} image={any[2].image}/>
    </>)
}

export default PropsFile;
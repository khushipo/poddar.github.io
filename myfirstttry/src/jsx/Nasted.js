function Nasted(props){

    const classes='nasted' + props.className;
    return (<>
    <div className={classes}>
        {props.children}
        <h2>this is my nasted component page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis explicabo nobis suscipit laudantium doloribus quos unde, dignissimos excepturi ut voluptatum ratione alias cupiditate dolorem maiores, illum praesentium earum a quibusdam sint, mollitia nemo officia temporibus! Nulla dolor vero nostrum odit distinctio placeat ut voluptate. Explicabo consequuntur nam tenetur qui!</p>
        </div>
    </>)
}

export default Nasted;
import akshya from "../img/akshya.jpg"
import Nasted from "./Nasted";
function Services(){
    const arr=[2,3,4,5]
  
    return (<>
<Nasted className="nasted">
    <h2>this is my services page</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius assumenda nihil aliquam, omnis, praesentium tenetur voluptates molestiae ut saepe quibusdam alias, minus illo iste ab. Possimus esse inventore, error exercitationem voluptatibus quod commodi natus itaque? Maiores maxime optio a, repudiandae tenetur autem, non neque quos reprehenderit, fugit dignissimos explicabo. Porro amet dignissimos autem distinctio facere beatae delectus temporibus qui, obcaecati aliquam harum? Cumque ducimus itaque consequuntur laborum omnis aliquid doloribus corrupti unde error adipisci provident dicta, distinctio neque illum cum, eius debitis nostrum saepe! Molestiae beatae suscipit voluptas veniam blanditiis quasi dignissimos, voluptatibus, quis ducimus, odit recusandae voluptates quo ipsum.</p>
    <img src={akshya} alt="not uploaded" />
  {arr}
  </Nasted>
    </>)
}

export default Services;
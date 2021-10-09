import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";


const Success = () => {
    const location = useLocation()
    const data = location.state.data

    const history = useHistory();

    const routeChange = () =>{ 
      let path = `/`; 
      history.push(path);
    }

    console.log(data)

    //TODO
    //Create an order

    return (
        <div style={{
        height:"100vh",
        display:"flex",
         flexDirection:"column",
          alignItems:"center",
          justifyContent:"center"}}>

        
            Successfull. Your order is being prepared...
            
            <button 
            style={{padding:10, marginTop:20}} 
             onClick={routeChange}>Go to Homepage</button>
        </div>
    )
}

export default Success


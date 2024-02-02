import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Menu()
{
  const size = useSelector(state=>state.carts.value.length )
    return <>
     <div className="row">
        <div className="col-xl-10 col-lg-10">
            <h1 className="alert-danger text-center">Shopping
             Card</h1>
        </div>
        <div className="col-xl-2 col-lg-2">
         <Link to="/"> <b>Home</b> </Link> 
           &nbsp;&nbsp;
          <Link to="/card" > <b>cart {size}</b></Link>
        </div>
     </div>
    </>
}
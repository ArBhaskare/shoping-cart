import { useSelector } from "react-redux"
import { addItem, removeItem } from "./CartSlice"
import { useDispatch } from "react-redux"

export default function Home()
{
    const dispatch = useDispatch()
    const products = useSelector(state=>state.products.value)
   const carts = useSelector(state=>state.carts.value)
   return <>
    <h2 className="bg-info">Our Products</h2>
s
    <div className="row">

        {products.map(ob=>{
            var states = carts.some(ct=>ct.id==ob.id);
            return  <div className="col-xl-3 col-lg-3 text-center">
            <img src={ob.images[0]} className="rounded-circle" height={200} 
            width={190} />
            <h5>{ob.title}</h5>
            <b className="text-danger">Rs. {ob.price}</b>
            <br/><br/>
             {states?<button onClick={()=>dispatch(removeItem(ob.id))} 
             className="btn btn-danger">Remove To Cart</button>:

             <button onClick={()=>dispatch(addItem(ob))} 
             className="btn btn-success">Add To Cart</button>
}
            </div> 
        }
            )}
    </div>
    </>
}
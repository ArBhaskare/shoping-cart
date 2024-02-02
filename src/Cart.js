import { useDispatch, useSelector } from "react-redux"
import { decrementQty, incrementQty, removeItem } from "./CartSlice"

export default function Home()
{
    const dispatch = useDispatch()
    const carts = useSelector(state=>state.carts.value)
    return <>
    <h2 className="bg-info">Our Cart</h2>
    <hr/>
    <table className="table">
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Opretion</th>
            </tr>
        </thead>
        <tbody>
            {carts.map(ob=><tr>
                <td><img src={ob.images[0]} height={100} width={100}/></td>
                <td>{ob.title}</td>
                <td>{ob.category}</td>
                <td>{ob.price}</td>
                <td>
                    <button onClick={()=>dispatch(decrementQty(ob.id))}
                     className="btn sm btn-success"> - </button>
                        &nbsp;&nbsp;
                        <b>{ob.qty}</b>
                        &nbsp;&nbsp;
                        <button onClick={()=>dispatch(incrementQty(ob.id))}
                         className="btn sm btn-success"> + </button>
                       </td>
                <td>{ob.price*ob.qty}</td>
                <td>
                    <button onClick={()=>dispatch(removeItem(ob.id))} className="btn btn-danger">Delete</button>
                </td>
            </tr>)}
        </tbody>
    </table>
    </>
}
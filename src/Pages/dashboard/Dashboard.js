import React,{useEffect} from 'react';
import StatusCart from "./StatusCart";
import "./dashboard.css";
import OrderChart from './OrderChart';
import { useSelector,useDispatch } from 'react-redux';
import { fetchOrders } from '../../Redux/Actions/orderAction';
import { getusers } from '../../Redux/Actions/userAction';
import { fetchProducts } from '../../Redux/Actions/productAction';
import PendingOrders from "./PendingOrders"

function Dashboard() {
  const {orders} = useSelector(state => state.orders)
  const {users} = useSelector(state => state.users)
  const {products} = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrders())
    dispatch(getusers())
    dispatch(fetchProducts())
  },[dispatch])

  return (
    <section>
      <div className='page_heading'>
          <h2>Dashboard</h2>
      </div>
      <div className='carts'>
          <StatusCart items={{orders,products,users}}/>
      </div>
      <div className='order_chart'>
        {Object.keys(orders) !== 0 && <OrderChart orders={orders}/>} 
      </div>
      <div className='pending_orders'>
        <PendingOrders orders={orders}/>
      </div>
    </section>
  )
}

export default Dashboard
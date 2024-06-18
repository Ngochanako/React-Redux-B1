import React from 'react'
import { useSelector } from 'react-redux'
type Product={
  id:number,
  name:string,
  price:number,
  quantity:number,
}
type State={
  ListProduct:Product[];
}
export default function ListProduct() {
  const listProduct=useSelector((state:State)=>state.ListProduct);
  console.log(listProduct);
  
  return (
    <div style={{marginTop:'20px'}}>
      
      <table>
        <thead>
          <th>Id</th>
          <th>Tên</th>
          <th>Số lượng</th>
          <th>Giá</th>
          <th>Chức năng</th>
        </thead>
        <tbody>
           {listProduct.map(product=>(
            <tr key={product.id}>
              <td>{product.id}</td>
               <td>{product.name}</td>
               <td>{product.quantity}</td>
               <td>{product.price}</td>
               <td><button>Sửa</button><button>Xóa</button></td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}

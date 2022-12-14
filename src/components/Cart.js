import React, { useState } from 'react'
import {Checkbox, Image, Select, Table, Tag } from 'antd'
import { products } from './Products'
import 'antd/dist/antd.css'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {FaSmile} from 'react-icons/fa'
import {HiEmojiSad} from 'react-icons/hi'
import Search from 'antd/lib/input/Search'
import {BrowserRouter as Router,Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
function Cart() {
  const [allProducts, setallProducts] = useState(products)

  const Option = Select.Option;

  const [{basket},dispatch] = useStateValue();

  const [checkedState, setCheckedState] = useState(
    new Array(allProducts.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>{return index === position ? !item : item}   
    );
    setCheckedState(updatedCheckedState);
  }

  const addItemsToCart = () => {
    for(let i = 0; i< checkedState.length;i++)
    {
      if(checkedState[i])
      {
        dispatch({
        type : 'ADD_TO_BASKET',
        item:{
        id : products[i - 1].id,
        name : products[i - 1].name,
        description : products[i - 1].description,
        price : products[i -1].price,
        color : products[i - 1].color,
        stocksize : products[i - 1].stocksize,
        categorysize : products[i - 1].categorysize,
        categorytype : products[i - 1].categorytype,
        image : products[i - 1].image
      }
    })
      }
    }
  }

  const [searchTerm,setSearchTerm] = useState('')

  const handleCart = (event) => {
     const id = event.target.getAttribute('id');
      const ind = products.findIndex(el => {
      return el.id == id;
   });
   console.log(id)
    dispatch({
      type : 'ADD_TO_BASKET',
      item:{
        id : products[ind].id,
        name : products[ind].name,
        description : products[ind].description,
        price : products[ind].price,
        color : products[ind].color,
        stocksize : products[ind].stocksize,
        categorysize : products[ind].categorysize,
        categorytype : products[ind].categorytype,
        image : products[ind].image
      }
    })
  }

  const handleChangeType = (value) => {
      const newprod = products.filter((product) => {return product.categorytype == value})
      setallProducts(newprod)
  }

  const handleChangeSize = (value) => {
      const newprod = products.filter((product) => {return product.categorysize == value})
      setallProducts(newprod)
  }

  const sizes = ['S','M','L','X','XL','XXL']

  const types = ['Hoodies', 'SweatShirts', 'Jackets', 'Trousers', 'Formals', 'Joggers']

  const columns = [
    {
      title : 'Image',
      dataIndex :'image',
      key : 'id',
      render : img => {
        return <Image src={img} height='70px' preview ={false}  />
      }
    },
    {
      title: 'Name',
      dataIndex : 'name',
      key : 'id',
      render : name => {
        return <a href="#">{name}</a>
      },
      sorter : (a,b) => a.name - b.name
    },
    {
      title : 'Color',
      dataIndex : 'color',
      key : 'id',
      render : color => {
        return <a href="#">{color}</a>
      },
      sorter : (a,b) => a.color - b.color,
      filters : [
        {text : 'Pink', value: 'Pink'},
        {text: 'Blue', value: 'Blue'},
        {text : 'Black', value: 'Black'},
        {text : 'Violet', value : 'Violet'},
        {text : 'Brown', value : 'Orange'},
        {text : 'Orange', value : 'Orange'},
        {text : 'White', value : 'White'}
      ],
      onFilter:(value, record) => {
       return record.color === value
      }
    },
    {
      title : 'Stock',
      dataIndex : 'stocksize',
      key : 'id',
      render : payload => {
        return <p>{payload>0?
        <Tag color='Green'>
          <FaSmile />
          In stock
        </Tag>
          :
          <Tag color='Red'>
            <HiEmojiSad />
            Out Of Stock
          </Tag>
          }</p>
      },
      sorter : (a,b) => a.stock - b.stock
    },
    {
      title : 'Price',
      dataIndex : 'price',
      key : 'id',
      sorter : (a,b) => a.price - b.price
    },
    {
      title : 'Buy',
      dataIndex : 'id',
      key : 'id',
      render : ide => {
        return <div style={{display : 'flex'}}>
          <p style={{background : 'rgb(216, 215, 215)',width: '3rem', textAlign: 'center'}}>1</p>
          <Link to='/checkout'>
          <HiOutlineShoppingCart id={ide} fontSize='1rem' color='white' style={{background : 'black',cursor:'pointer', width: '3rem', height: '1rem', margin : '5px'}} value={ide} onClick={handleCart} />
          </Link>
          <Checkbox value={ide} id={ide} checked={checkedState[ide]}
                    onChange={() => handleOnChange(ide)} />
          </div>
      }
    }
  ]


  
  return (
    <div>
      <div style={{display : 'flex',flexDirection : 'row'}}>
      <Select defaultValue={'Select Type'} style={{ width: 120}} onChange = {handleChangeType}>
        {
          types.map(size => (<Option key={size} value={size}>{size}</Option>))
        }
      
    </Select>
          <Select defaultValue={'Select Size'} style={{ width: 120 }} onChange = {handleChangeSize}>
        {
          sizes.map(size => (<Option key={size} value={size}>{size}</Option>))
        }
      
    </Select>
        <Search style={{width :'10rem',justifyContent:'flex-end'}} autoFocus placeholder='Search'
         onChange={e=>setSearchTerm(e.target.value)}
         />
        <Link to='/checkout'>
         <button style={{background :'green',color:'#f4eded',justifyContent:'flex-end'}} onClick= {addItemsToCart}>Add to cart</button>
          </Link> 
        </div>
                      {products.filter((val)=>{
        if(searchTerm == ""){
          return null
        }
        else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        }
      }).map((val,key)=>{
        console.log(val)
        return <div> {val.name} </div>
      })}
        <Table
         dataSource={allProducts} columns={columns} pagination={true}>
        </Table>
    </div>
  )
}

export default Cart
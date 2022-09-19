import React from 'react'
import CurrencyFormat from 'react-currency-format'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { getbasketTotal } from './Reducer'
import { useStateValue } from './StateProvider'


function Subtotal() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div>
        <CurrencyFormat renderText={(value) => (
                <h5>{value}</h5>
        )} decimalScale={2} value={getbasketTotal(basket)} displayType={'text'} thousandSeparator= {true} prefix={'$ '} />
    </div>
  )
}

export default Subtotal
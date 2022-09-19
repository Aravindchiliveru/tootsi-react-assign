import React from 'react'
import CurrencyFormat from 'react-currency-format'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

function Subtotal() {
  return (
    <div>
        <CurrencyFormat renderText={(value) => (
                <div className="d-flex justify-content-between mb-5">
                <h5 className="text-uppercase">Total price</h5>
                <h5>0</h5>
                </div>
        )} decimalScale={2} value={0} displayType={'text'} thousandSeparator= {true} prefix={'$'} />
    </div>
  )
}

export default Subtotal
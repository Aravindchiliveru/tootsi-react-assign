import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

function CheckoutProduct({id, image, name, categorytype, price}) {
  return (
    console.log(name),
    <div className="row mb-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={image}
                        className="img-fluid rounded-3" alt="Cotton T-shirt" />
                    </div>
                    <p>{name}</p>
                  </div>
  )
}

export default CheckoutProduct
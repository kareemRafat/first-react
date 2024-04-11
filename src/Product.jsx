/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
export default function Product({ product, children , onDelete }) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12 mb-4">
        <div className="card">
          <img src={product.thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
            <div className="d-flex justify-content-between">
              <a href="#" className="btn btn-primary position-relative">
                price : {product.price}
                {children}
              </a>
              {/* delete */}
              <div
                className="align-self-center text-danger"
                style={{ cursor: "pointer" }}
                // raising an event 
                onClick={ () => onDelete(product)}
              >
                <i className="fa-solid fa-trash"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

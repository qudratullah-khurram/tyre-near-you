import hubImage from '../assets/Hero2.jpg'

function ShopHub() {
  return (
    <section className="shop-hub">
      <div className="shop-hub-container">
        <div className="shop-hub-image">
          <img src={hubImage} alt="Our Professional Tyre Hub" />
        </div>
        <div className="shop-hub-content">
          <h2>Our Professional <span>Operations Hub</span></h2>
          <p>
            While we specialize in rapid roadside assistance, our strength comes from a massive, 
            professional infrastructure. Our central hub is equipped with high-end machinery and 
            a dedicated team available 24/7.
          </p>
          <p>
            With our branded fleet of emergency vans and expert technicians, we don't just find help 
            — we provide a standard of excellence that keeps you safe on the road.
          </p>
          <div className="hub-stats">
            <div><strong>24/7</strong> Support</div>
            <div><strong>Fast</strong> Dispatch</div>
            <div><strong>Expert</strong> Team</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopHub
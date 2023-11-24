import React from 'react';
import { Footer, Navbar } from "../components";
import manShoe from "./manShoe.jpg";
import womanShoe from "./womanShoe.jpg";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Welcome to Sneaker Shopping, your ultimate destination for all things sneakers! We're passionate about the culture and craftsmanship of footwear, and our mission is to provide sneaker enthusiasts with the latest trends, exclusive releases, and in-depth insights into the world of sneakers.<br /><br /> 

At Sneaker Shopping, we believe that sneakers are more than just shoes; they're a statement of style, an expression of individuality, and a symbol of urban fashion. Our team of dedicated sneakerheads and fashion aficionados curate a carefully selected collection of sneakers from top brands, emerging designers, and iconic collaborations.<br /><br /> 

We're not just a sneaker store, we're a community that celebrates the art of sneaker design, the history of iconic releases, and the influence of sneakers on street culture. Our blog features in-depth reviews, style guides, and interviews with industry insiders to keep you informed and inspired.<br /><br /> 

Whether you're a seasoned collector or a newbie to the sneaker world, Sneaker Shopping is your go-to source for the latest drops, sneaker news, and style inspiration. Join us on this exciting journey as we explore the ever-evolving universe of sneakers, one step at a time.<br /><br /> 

Step into the world of Sneaker Shopping and discover the perfect pair that complements your unique style and personality.


        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row" style={{justifyContent:'center'}}>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={manShoe} alt="" height={160} width={600} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Shoes</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src={womanShoe} alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Shoes</h5>
              </div>
            </div>
          </div>

          {/* <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div> */}
          {/* <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
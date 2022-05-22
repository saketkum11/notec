import "./Card.css";
const Card = () => {
  return (
    <>
      <section className="d-flex mt-5 flex-wrap group justify-content-center gap-3">
        <div className="card w-25">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
              culpa!
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card w-25">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
              itaque!
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card w-25">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate sequi ad ab voluptas aliquid illum?
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card w-25">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">Lorem ipsum dolor sit amet.</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card w-25">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur architecto facere beatae, quod esse necessitatibus.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export { Card };

import 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
function Blog() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Blogs</h1>
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 1</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere provident culpa sint sequi.
                  </p>
                  <Link className="btn btn-primary" to="/blogs/1">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 2</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere provident culpa sint sequi.
                  </p>
                  <Link className="btn btn-primary" to="/blogs/2">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 3</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere provident culpa sint sequi.
                  </p>
                  <Link className="btn btn-primary" to="/blogs/3">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Blog;

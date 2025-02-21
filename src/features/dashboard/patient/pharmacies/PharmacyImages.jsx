import PharmacyHeader from "./pharmacyHeader";

function PharmacyImages() {
  return (
    <div className="main-wrapper">
      <div className="page-wrapper" style={{ minHeight: 270 }}>
        <div className="content">
          <PharmacyHeader activeTab="images" headerText="Images" />
          {/* Page Header */}
          <div className="page-header"></div>
          {/* /Page Header */}
          <div id="lightgallery" className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href="assets/img/blog/blog-01.jpg">
                <img
                  className="img-thumbnail"
                  src="/images/clinic/image1.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a
                href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MOvvaxkrLPSehZzvLBfMJM2Xk6UL1AVL8w&s"
                target="blank"
              >
                <img
                  className="img-thumbnail"
                  src="/images/clinic/image2.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href="assets/img/blog/blog-03.jpg">
                <img
                  className="img-thumbnail"
                  src="/images/clinic/image3.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
              <a href="assets/img/blog/blog-04.jpg">
                <img
                  className="img-thumbnail"
                  src="/images/clinic/image4.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PharmacyImages;

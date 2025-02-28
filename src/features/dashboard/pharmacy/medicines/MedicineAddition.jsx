import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function MedicineAddition() {
  return (
    <div className="page-wrapper" style={{ minHeight: 270 }}>
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-7 col-6">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a>Medicines </a>
                </li>
                <li className="breadcrumb-item">
                  <i className="feather-chevron-right" />
                </li>
                <li className="breadcrumb-item active">Add Medicine</li>
              </ul>
            </div>
            <div class="col-sm-5 col-6 text-end">
              <Link
                to="/pharmacy/dashboard"
                class="btn btn-primary btn-rounded"
              >
                <IoArrowBackOutline /> Return Back
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card invoices-add-card">
              <div className="card-body">
                <form action="#" className="invoices-form">
                  <div className="invoice-item"></div>
                  <div className="invoice-add-table">
                    <h4>Medicine Details</h4>
                    <div className="table-responsive">
                      <table className="table table-striped table-nowrap  mb-0 no-footer add-table-items">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Expiration Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="add-row">
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td>
                              <input type="date" className="form-control" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-7 col-md-6">
                      <div className="invoice-faq">
                        <div
                          className="panel-group"
                          id="accordion"
                          role="tablist"
                          aria-multiselectable="true"
                        >
                          <div className="faq-tab">
                            <div className="panel panel-default">
                              <div
                                className="panel-heading"
                                role="tab"
                                id="headingTwo"
                              ></div>
                              <div
                                id="collapseTwo"
                                className="panel-collapse collapse"
                                role="tabpanel"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordion"
                              >
                                <div className="panel-body">
                                  <textarea
                                    className="form-control"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="faq-tab">
                            <div className="panel panel-default">
                              <div
                                className="panel-heading"
                                role="tab"
                                id="headingThree"
                              ></div>
                              <div
                                id="collapseThree"
                                className="panel-collapse collapse"
                                role="tabpanel"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordion"
                              >
                                <div className="panel-body">
                                  <textarea
                                    className="form-control"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                      <div className="upload-sign">
                        <div className="input-block"></div>
                        <div className="input-block float-end mb-0">
                          <button className="btn btn-primary" type="submit">
                            Add Medicine
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicineAddition;

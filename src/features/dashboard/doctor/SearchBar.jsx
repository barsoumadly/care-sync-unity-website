function SearchBar({ name }) {
  return (
    <div className="card-body">
      {/* /Table Header */}
      <div className="page-table-header mb-2">
        <div className="row align-items-center">
          <div className="col">
            <div className="doctor-table-blk">
              <h3>{name}</h3>
              <div className="doctor-search-blk">
                <div className="top-nav-search table-search-blk">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here"
                    />
                    <a className="btn">
                      <img
                        src="/images/dashborad/icons/search-normal.svg"
                        alt="search"
                      />
                    </a>
                  </form>
                </div>
                <div className="add-group">
                  <a className="btn btn-primary doctor-refresh ms-2">
                    <img src="/images/dashborad/icons/re-fresh.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

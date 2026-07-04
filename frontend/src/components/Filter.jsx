function Filter({ filters, setFilters }) {
    const handleChange = (e) => {
      setFilters({
        ...filters,
        [e.target.name]: e.target.value,
      });
    };
  
    return (
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h4 className="mb-3">Filter Tasks</h4>
  
          <div className="row">

            <div className="col-md-4 mb-3">
              <label className="form-label">Search</label>
  
              <input
                type="text"
                className="form-control"
                placeholder="Search title..."
                name="search"
                value={filters.search}
                onChange={handleChange}
              />
            </div>
  

            <div className="col-md-4 mb-3">
              <label className="form-label">Status</label>
  
              <select
                className="form-select"
                name="status"
                value={filters.status}
                onChange={handleChange}
              >
                <option value="">All Status</option>
                <option value="todo">Todo</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
  
            <div className="col-md-4 mb-3">
              <label className="form-label">Category</label>
  
              <select
                className="form-select"
                name="category"
                value={filters.category}
                onChange={handleChange}
              >
                <option value="">All Categories</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Sort By</label>
  
              <select
                className="form-select"
                name="sort"
                value={filters.sort}
                onChange={handleChange}
              >
                <option value="">Due Date</option>
                <option value="status">Status</option>
              </select>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  
  export default Filter;
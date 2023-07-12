class ApiFilter {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    let keyword = this.queryString.keyword
      ? {
          slug: {
            $regex: this.queryString.keyword,
            $options: "i",
          },
        }
      : {};
    this.query = this.query.find(keyword);
    return this;
  }
}

export default ApiFilter;

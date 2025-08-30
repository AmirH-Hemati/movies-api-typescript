import { Model, Query, Document } from "mongoose";
export default class ApiFeatures<T extends Document> {
  public query: Query<T[], T>;
  constructor(public Model: Model<T>, public queryString: any) {
    this.query = this.Model.find();
  }
  filter() {
    const queryObj = { ...this.queryString };
    const excludedField: string[] = ["sort", "page", "limit", "fields"];
    excludedField.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(lt|lte|gt|gte)\b/g, (match) => `$${match}`);
    this.query = this.Model.find(JSON.parse(queryStr));

    return this;
  }

  Sort() {
    if (this.queryString.sort) {
      const sortedBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortedBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }
  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }
  paginate() {
    const page: number = this.queryString.page * 1 || 1;
    const limit: number = this.queryString.limit * 1 || 100;
    const skip: number = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

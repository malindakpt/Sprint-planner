export class Task {
  private _jid;
  private _taskType;
  private _subProduct;
  private _owner;
  private _status;
  private _remainingTime;

  get jid() {
    return this._jid;
  }

  set jid(value) {
    this._jid = value;
  }

  get taskType() {
    return this._taskType;
  }

  set taskType(value) {
    this._taskType = value;
  }

  get subProduct() {
    return this._subProduct;
  }

  set subProduct(value) {
    this._subProduct = value;
  }

  get owner() {
    return this._owner;
  }

  set owner(value) {
    this._owner = value;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }

  get remainingTime() {
    return this._remainingTime;
  }

  set remainingTime(value) {
    this._remainingTime = value;
  }
}

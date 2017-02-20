Template.body.viewmodel({
  items: [1, 2],
  log_and_return_items: function () {
    class SC extends Array {
      last() {
        return this[this.length - 1];
      }
    }
    let seq = new SC(1, 2, 3);
    console.log(seq);
    console.log(this.items());
    console.log("instanceof Array", this.items() instanceof Array);
    console.log("isArray", _.isArray(this.items()));
    return this.items();
  }
});

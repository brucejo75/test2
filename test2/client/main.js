Template.body.viewmodel({
  items: [1, 2],
  log_and_return_items: function () {
    console.log(this.items());
    console.log("instanceof Array", this.items() instanceof Array);
    console.log("isArray", _.isArray(this.items()));
    return this.items();
  }
});
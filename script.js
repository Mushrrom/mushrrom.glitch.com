$("body").terminal(
  {
    test: function () {
      this.echo("[[b;#aaaaaa;]" + "This worked surprisingly" + "]");
    },
    test2: function (input) {
      this.echo(input + "  Worked?????");
    },
  },
  {
    greetings: "My First Web Terminal\n",
    //-------
    prompt: function () {
      return [
        "[[b;#aaaaaa;]Yes:] "].join('');
    },
    //----------
  }
);
// mysql keywords
var uppercase = ["TEST", "TEST2"];
var keywords = uppercase.concat(
  uppercase.map(function (keyword) {
    return keyword.toLowerCase();
  })
);
$.terminal.defaults.formatters.push(function (string) {
  return string
    .split(/((?:\s|&nbsp;)+)/)
    .map(function (string) {
      if (keywords.indexOf(string) != -1) {
        return "[[b;#bcc236;]" + string + "]";
      } else {
        return "[[b;#d79921;]" + string + "]";
      }
    })
    .join("");
});

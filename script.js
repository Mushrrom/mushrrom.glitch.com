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
      return ["[[b;#aaaaaa;]Yes:] "].join("");
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
        return "[[b;#98971a;]" + string + "]";
      } else {
        return "[[b;#cc241d;]" + string + "]";
      }
    })
    .join("");
});

function maketext(color, text) {
  var colors = {
    blue: "#458588",
    green: "#98971a",
    grey: "#999",
    red: "#A00",
    yellow: "#FF5",
    violet: "#a320ce",
    white: "#fff",
  };
  //return p1 * p2;   // The function returns the product of p1 and p2
}

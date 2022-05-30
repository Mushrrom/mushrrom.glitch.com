

console.log(maketext)

var theme = 0

const terminal = document.querySelector(".terminal")

$("body").terminal(
  {
    test: function () {
      document.querySelector(".terminal").classList.toggle("light");
    },
    test2: function (input = "nothing") {
      this.echo(input + "  test;)");
    },
    
  },
  {
    greetings: "███╗   ███╗██╗   ██╗███████╗██╗  ██╗██████╗ ██████╗  ██████╗ ███╗   ███╗\n████╗ ████║██║   ██║██╔════╝██║  ██║██╔══██╗██╔══██╗██╔═══██╗████╗ ████║\n██╔████╔██║██║   ██║███████╗███████║██████╔╝██████╔╝██║   ██║██╔████╔██║\n██║╚██╔╝██║██║   ██║╚════██║██╔══██║██╔══██╗██╔══██╗██║   ██║██║╚██╔╝██║\n██║ ╚═╝ ██║╚██████╔╝███████║██║  ██║██║  ██║██║  ██║╚██████╔╝██║ ╚═╝ ██║\n╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝",
    //-------
    prompt: function () {
      return([maketext("blue", "user")].join("") + maketext("white", "@") + maketext("green", "website") +  maketext("white", ":$ ~ "));
    },
    //----------
  }
);
// mysql keywords
var uppercase = ["TEST", "TEST2", "CLEAR"];
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
        return maketext("aqua", string);
      } else {
        return maketext("red", string);
      }
    })
    .join("");
});







function maketext(color, text) {
  var colors = {
    blue: "#458588",
    green: "#98971a",
    grey: "#a89984",
    red: "#cc241d",
    yellow: "#d79921",
    violet: "#b16286",
    white: "#ebdbb2",
    aqua: "#689d6a",
    
  };
  if (colors[color]) {
    return '[[;' + colors[color] + ';]' + text + ']';
  } else {
    return text;
  }
}

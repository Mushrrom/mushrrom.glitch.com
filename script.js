console.log(maketext);

var light = 0;
var banner = "███╗   ███╗██╗   ██╗███████╗██╗  ██╗██████╗ ██████╗  ██████╗ ███╗   ███╗\n\
████╗ ████║██║   ██║██╔════╝██║  ██║██╔══██╗██╔══██╗██╔═══██╗████╗ ████║\n\
██╔████╔██║██║   ██║███████╗███████║██████╔╝██████╔╝██║   ██║██╔████╔██║\n\
██║╚██╔╝██║██║   ██║╚════██║██╔══██║██╔══██╗██╔══██╗██║   ██║██║╚██╔╝██║\n\
██║ ╚═╝ ██║╚██████╔╝███████║██║  ██║██║  ██║██║  ██║╚██████╔╝██║ ╚═╝ ██║\n\
╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝\n\
Type sumfetch for a summary\n\
Type help for a list of all available commands";
const terminal = document.querySelector(".terminal");

$("body").terminal(
  {
    theme: function () {
      if (document.querySelector(".terminal").classList.value == "terminal") {
        light = 1;
      } else {
        light = 0;
      }
      document.querySelector(".terminal").classList.toggle("light");
      this.clear();
    },
    test2: function (input = "nothing") {
      this.echo(input + "  test;)");
    },
    test3: function () {
      var link = document.createElement("a");
      link.textContent = "Test website";
      link.href = "https://example.com";

      this.echo(link);
    },
    lvalue: function () {
      this.echo(light);
    },
  },
  {
    greetings: maketext("fg", banner),
    //-------
    prompt: function () {
      return (
        [maketext("blue", "user")].join("") +
        maketext("fg", "@") +
        maketext("green", "mushrrom.glich.me") +
        maketext("fg", ":$ ~ ")
      );
    },
    //----------
  }
);

// mysql keywords
var uppercase = ["THEME", "TEST2", "CLEAR"];
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
  if (light === 1) {
    var fgcolour = "#3c3836";
    var greycolour = "#7c6f64";
  } else {
    var fgcolour = "#ebdbb2";
    var greycolour = "#a89984";
  }
  var colors = {
    blue: "#458588",
    green: "#98971a",
    red: "#cc241d",
    yellow: "#d79921",
    violet: "#b16286",
    white: "#ebdbb2",
    aqua: "#689d6a",
    fg: fgcolour,
    grey: greycolour,
  };
  if (colors[color]) {
    return "[[;" + colors[color] + ";]" + text + "]";
  } else {
    return text;
  }
}

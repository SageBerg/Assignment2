var main = function () {
    var toDos = ["Get groceries",
                 "Make up some new ToDos",
                 "Prep for Monday's class",
                 "Answer emails",
                 "Take Gracie to the park",
                 "Finish writing this book"];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                // newest first, so we have to go through
                // the array backwards
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                // oldest first, so we go through the array forwards
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // input a new to-do
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input).append($button);
               /* Alternatively append() allows multiple arguments so the above
                can be done with $content = $("<div>").append($input, $button); */
            } else if ($element.parent().is(":nth-child(4)"))  {
                // input a search keyword
                $input = $("<input>"),
                $button = $("<button>").text("Search");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        //loop through toDos, look for a match on first element
                        var found = false;
                        toDos.forEach( function ( item ) {
                            //item = "wash the car" e.g.
                            if ( item.search($input.val()) != -1) {
                                window.alert("Found it: " + item);
                                found = true;
                                //break;
                            }
                        });
                        if ( !found ) {
                            window.alert("Not Found.");
                        }
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input, $button);
            } else if ($element.parent().is(":nth-child(6)")) {
                $name_input = $("<input>"),
                $password_input = $("<input type='password'>"),
                $button = $("<button>").text("Log In");

                $button.on("click", function () {
                    console.log('User Name: ' + $name_input.val() + '\nPassword: ' 
                        + $password_input.val());
                });
                $content = $("<div>").append($name_input, $password_input, $button);
            } 
            $("main .content").append($content);
            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);

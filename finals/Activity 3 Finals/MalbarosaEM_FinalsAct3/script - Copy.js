$(document).ready(function(){
    $("*").css("font-family", "Verdana")

    $("#title").text("Welcome Students!") //ID

    $(".intro").text("Leaning JQuery") //Class


    //$("p.intro").css("color", "pink")
    $("p:first").css("color","red") //ALL p

    $("ul li:first").css("color", "green")
    $("[href]").css("color","red")

    $("th").css("background", "royalblue")
    $("tr:even").css("background", "lightblue")
    $("tr:odd").css("background", "lightgreen")


    $("#btn").click(function(){
        $("#message").text("You clicked the button!")
    })

    $("#btn").dblclick(function(){
        $("#message").text("You double clicked the button!")
        $(this).css("background", "green")
    })

    $("#btn").mouseenter(function(){
        $("#message").text("Your mouse reached the button")
    })

    $("#btn").mouseleave(function(){
        $("#message").text("Your mouse exited the button")
    })

    $("#btn2").mousedown(function(){
        $(this).css("background", "blue")
        $("#message").text("Mouse is holding button2")
    })
    $("#btn2").mouseup(function(){
        $(this).css("background", "royalblue")
        $("#message").text("Mouse is not holding button2")

    })

    $("#name").focus(function(){
        $("#message").text("Typing...")
        $(this).css("background","cornflowerblue")
    })

    $("#name").blur(function(){
        $("#message").text("Output: ")
        $(this).css("background", "white")
    })

    $("#course").change(function(){
        $("#message").text($(this).val())
    })

    $("#btnHide").click(function(){
        $("#table").hide("slow")
    })
    $("#btnShow").click(function(){
        $("#table").show(2000)
    })

})


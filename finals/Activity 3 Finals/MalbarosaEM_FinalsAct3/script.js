$(document).ready(function(){
    $("*").css("font-family", "Verdana")

    $("#changeTitle").click(function(){
        $("#title").text("Hello to you fellow students!")
        $("#message").text("Changed Title")
        $(this).css("background","cornflowerblue")
        $(this).css("color", "white")
    })
    $("#changeTitle").dblclick(function(){
        $("#message").text("Double Clicked!")
        $(this).css("background","palegreen")
        $(this).css("color","black")
    })
    $("#changeTitle").mousedown(function(){
        $("#message").text("Clicking...")
    })
    $("#changeTitle").mouseup(function(){
        $("#message").text("Released!")
    })
    $("#hideProfile").click(function(){
        $(".innerCard").hide("slow")
        $("#message").text("Hidden Profile")
    })
    $("#showProfile").click(function(){
        $(".innerCard").show("slow")
        $("#message").text("Shows Profile")
    })
    $("#course").change(function(){
        $("#courseText").text("Course: "+($(this).val()))
        $("#courseSelected").text("Course Selected: "+($(this).val()))
        $("#message").text("Changed course to: " + ($(this).val()))
    })

    $("#even").click(function(){
        $("th").css("background", "cornflowerblue")
        $("tr:even").css("background", "cornflowerblue")
        $("tr:odd").css("background", "white")
        $("#Nani").text("Even-numbered rows are highlighted")
    })
    $("#odd").click(function(){
        $("th").css("background", "cornflowerblue")
        $("tr:odd").css("background", "cornflowerblue")
        $("tr:even").css("background", "white")
        $("#Nani").text("Odd-numbered rows are highlighted")
    })

    $("#hideTable").click(function(){
        $("#table").hide("slow")
        $("#message").text("Hidden Table")
        $("#Nani").text("Hidden Table")
    })
    $("#showTable").click(function(){
        $("#table").show("slow")
        $("#message").text("Shows Table")
        $("#Nani").text("Shows Table")
    })
})
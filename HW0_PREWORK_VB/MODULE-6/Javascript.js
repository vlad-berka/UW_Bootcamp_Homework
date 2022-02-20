document.getElementById("button1").addEventListener("click", function()
{
    document.getElementById("box").style.height = "200px";
    document.getElementById("box").style.width = "200px";
})

document.getElementById("button2").addEventListener("click", function()
{
    document.getElementById("box").style.backgroundColor = "blue";
})

document.getElementById("button3").addEventListener("click", function()
{
    document.getElementById("box").style.opacity = "0.5";
})

document.getElementById("button4").addEventListener("click", function()
{
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.opacity = "1.0";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.margin = "25px";
    document.getElementById("box").style.borderWidth = "0px";
    document.body.style.backgroundColor = "white";
})

document.getElementById("button5").addEventListener("click", function()
{
    document.getElementById("box").style.margin = "0 auto";
})

document.getElementById("button6").addEventListener("click", function()
{
    document.getElementById("box").style.borderColor = "white";
    document.getElementById("box").style.borderStyle = "dashed";
    document.getElementById("box").style.borderWidth = "10px";
})

document.getElementById("button7").addEventListener("click", function()
{
    document.body.style.backgroundColor = "gray";
})
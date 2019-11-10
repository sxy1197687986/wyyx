var time = setInterval(()=>{
    $("#head_wrap").animate({"top":"-18"},300,()=>{
        $("#head_wrap li").first().appendTo($("#head_wrap"))
        $("#head_wrap").css("top",0)
    })
},2000)
$.get("./头部分类.json", (txt) => {
    for (var x = 0; x < txt.length; x++) {
        var pop = "";
        for (var y = 0; y < txt[x].length; y++) {
            pop += `
                <div class="json_BB">
                    <a class="json_BBa" href="">
                        <img class="json_img" src=${txt[x][y].img1} alt="">
                        <span class="json_span">${txt[x][y].span1}</span>
                    </a>
                </div>
            `
        }
        $(".json_bottom").eq(x).html(pop)
    }
})



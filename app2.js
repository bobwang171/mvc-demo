import $ from "jquery";
import "./app2.css"; 
const $bar1 = $("#bar1")
const $bar2 = $("#bar2")
const $tabBar = $("#app2 .tab-bar")
const $tabContent=$("#app2 .tab-content")
$tabBar.on("click", "li", (e) => {
    const $target = $(e.currentTarget)
    let index = $target.index()
    $tabContent.children().eq(index).addClass("action")
        .siblings().removeClass("action")
    $tabBar.children().eq(index).addClass("selected").siblings().removeClass("selected")
    }
)
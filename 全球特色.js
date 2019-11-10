$(".header").load("./网易严选头部.html")
$(".footer").load("./网易严选尾部.html")

var swiper = new Swiper('#swp', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
for (i = 0; i < swiper.pagination.bullets.length; i++) {
    swiper.pagination.bullets[i].onmouseover = function () {
        this.click();
    };
}
swiper.el.onmouseover = function () {
    swiper.autoplay.stop();
}
swiper.el.onmouseout = function () {
    swiper.autoplay.start();
}


class AjaxHttp {
			get(url) {
				return new Promise((resolve, reject) => {
					fetch(url)
						.then(res => {
							return res.json()
						})
						.then(data => {
							resolve(data)
						})
						.catch(err => {
							reject(err)
						})
				})
			}
        }
        
const oHttp = new AjaxHttp();
oHttp.get("./全球特色.json")
	.then(data => {
		let a = ""
		data[0].list.forEach((txt) => {
			a = `<a href="">${txt}</a>`
			$(".categoryGroup").append(a);
        })
        
        let b = ""
		data[0].lis.forEach((txt) => {
			b = `<a href="">${txt}</a>`
			$(".categoryGroup1").append(b);
		})
        
       let title = ""
       let li = ""
       let ul = ""
       let div =""
       let all =""
       data[0].item.forEach((txt,i)=>{
           let oo = txt.li
           title = `
           <div class="m-Level2Category">
                            <div class="hd">
                    <p class="title">
                        <span class="name1">${txt.head}</span>
                    </p>
                    <p class="desc">${txt.head1}</p>
                    </div>
                            </div>
           `
           oo.forEach((txt)=>{
            li += `
            <li class="item">
                                <div class="m-product j-product showScene">
                                        <div class="hd1">
                                            <a href="">
                                                <div style="width: 100%;height: 100%;">
                                                    <img src="${txt.img}" alt="" class="img">
                                                </div>
                                                <div class="hover" style="width: 100%; height: 100%;>
                                                    <img src="${txt.imgH}" alt="">
                                                </div>
                                                <img src="img/bf43c8b8b8c205b14e3ac27021e04394.png" alt="" class="promoLogo">
                                                <div class="prombanner">
                                                    <div class="promTitle">
                                                        <div class="title">
                                                            <span>${txt.title1}</span>
                                                        </div>
                                                        <div class="subTitle" style="vertical-align: middle;">
                                                            <span>${txt.price}</span>
                                                        </div>
                                                    </div>
                                                    <div class="promContent">${txt.time}</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="bd">
                                            <div class="prdtTags">
                                                <span class="m-itemTag ">${txt.title2}</span>
                                            </div>
                                            <h4 class="name2">
                                                <a href="">
                                                    <span>${txt.sname1}</span>
                                                </a>
                                            </h4>
                                            <p class="price">
                                                <span>
                                                    <span>￥</span>
                                                    <span>${txt.price1}</span>
                                                </span>
                                                <span class="counterPrice">
                                                        <span>￥</span>
                                                        <span>${txt.price2}</span>
                                                </span>
                                            </p>
                                            <div>
                                                <hr>
                                                <p class="desc">${txt.sname2}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
            `
       
           })
           ul = `
           <ul class="mr mt clearfix">
              ${li}
           </ul>
           `
           all =`
           ${title}
           ${ul}
           `
           $(".m-content").append(all)

       })
     
       $(".m-itemTag ").each((i,val)=>{
         
            if($(".m-itemTag ").eq(i).text()==""){
        $(".m-itemTag ").eq(i).css("display","none")
       }
       })
      
        

	})
	.catch(err => {
		console.log(err)
	})
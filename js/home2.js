$(function(){
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop()
        let innerHeight = $(window).innerHeight()

        // liver
        let xl = scrollTop-($(".liver").offset().top-innerHeight)
        let rl = xl/innerHeight
        if (xl>0){
            if(rl>0.8 && rl<5.8){
                $(".liver1").css({
                    "transform":"translateY("+ (xl-0.8*innerHeight) +"px)"
                })     
                $(".liver2").css({
                    "transform":"translateY("+ (xl-0.8*innerHeight) +"px)"
                })     
            }
            if(rl<0.8){
                $(".liver1").css({
                    "opacity":0.1,
                })     
                $(".liver2").css({
                    "opacity":0,
                })     
            }else if(rl>0.8 && rl<1.2){
                $(".liver1").css({
                    "opacity":(rl-0.8)/0.4,
                })    
                $(".liver2").css({
                    "opacity":0,
                })      
            }else{
                $(".liver1").css({
                    "opacity":-(rl-2)/0.8,
                })   
                $(".liver2").css({
                    "opacity":(rl-1.2)/0.8,
                })       
            }
        }
        // scene1
        let x1 = scrollTop-($(".box1").offset().top-innerHeight)
        let r1 = x1/innerHeight
        if (x1>0){
            if(r1<2){
                $(".scene1").css({
                    "transform":"translateY("+ (x1-innerHeight) +"px)"
                })     
            }
            if(r1<0.8){
                $(".scene1").css({
                    "opacity":0,
                })     
            }else if(r1>0.8 && r1<1.2){
                $(".scene1").css({
                    "opacity":(r1-0.8)/0.4,
                })     
            }else if(r1>1.2 && r1<1.5){
                $(".scene1").css({
                    "opacity":1,
                })     
            }else if(r1>1.5 && r1<1.9){
                $(".scene1").css({
                    "opacity":(1.9-r1)/0.4,
                })     
            }else{
                $(".scene1").css({
                    "opacity":0,
                })     
            }
        }
        // scene2
        let x2 = scrollTop-($(".box2").offset().top-innerHeight)
        let r2 = x2/innerHeight
        if (x2>0){
            if(r2<2){
                $(".scene2").css({
                    "transform":"translateY("+ (x2-innerHeight) +"px)"
                })     
            }
            if(r2<0.2){
                $(".scene2").css({
                    "opacity":0,
                })     
            }else if(r2>0.2 && r2<0.6){
                $(".scene2").css({
                    "opacity":(r2-0.2)/0.4,
                })     
            }else if(r2>0.6 && r2<1){
                $(".scene2").css({
                    "opacity":1,
                })     
            }else if(r2>1 && r2<1.4){
                $(".scene2").css({
                    "opacity":(1.4-r2)/0.4,
                })     
            }else{
                $(".scene2").css({
                    "opacity":0,
                })     
            }
        }
        // scene3
        let x3 = scrollTop-($(".box3").offset().top-innerHeight)
        let r3 = x3/innerHeight
        if (x3>0){
            if(r3<1.2){
                $(".scene3").css({
                    "transform":"translateY("+ (x3-innerHeight) +"px)"
                })     
            }
            if(r3<0.2){
                $(".scene3").css({
                    "opacity":0,
                })     
            }else if(r3>0.2 && r3<0.6){
                $(".scene3").css({
                    "opacity":(r3-0.2)/0.4,
                })     
            }else if(r3>0.6 && r3<1){
                $(".scene3").css({
                    "opacity":1,
                })     
            }else if(r3>1 && r3<1.4){
                $(".scene3").css({
                    "opacity":(1.4-r3)/0.4,
                })     
            }else{
                $(".scene").css({
                    "opacity":0,
                })     
            }
        }
        // scene4
        let x4 = scrollTop-($(".box4").offset().top-innerHeight)
        let r4 = x4/innerHeight
        if (x4>0){
            if(r4>0.85){
                $(".but").css({
                    "transform":"translateY("+ (innerHeight-x4)*1.2 +"px)"
                })     
            }
        }
        // bottle
        let xb = scrollTop-($(".bottle0").offset().top-innerHeight)
        let rb = xb/innerHeight
        if (xb>0){
            if(rb>0.25 && rb<1){
                $(".bottle_l").css({
                    "transform":"rotate("+ (rb-0.25)*200 +"deg)",
                })
                $(".bottle_r").css({
                    "transform":"rotate("+ -(rb-0.25)*200 +"deg)"
                })     
            }
        }
    })
    $(".area").mouseenter(function(){
        var index=$(this).index()
        $(".area_text").eq(index).css({
            "display":"block"
        }).eq(index).siblings().css({
            "display":"none"
        })
    })
    $(".area").mouseleave(function(){
        var index=$(this).index()
        $(".area_text").css({
            "display":"none"
        })
    })
}) 
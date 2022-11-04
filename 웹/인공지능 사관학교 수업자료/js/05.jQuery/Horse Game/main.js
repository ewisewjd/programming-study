// 1. left라는 버튼을 눌렀을때, 말이 왼쪽으로 50px씩 이동
// 2. right 라는 버튼을 눌렀을때, 말이 오른쪽으로 50px씩 이동
// 단, 말이 배경사진 밖으로 나기지 않게 할 것!

let num = 0
$('.btn.left').click(()=>{
    let left = num += 50
    $('#horse').css('right',left+'px')
    if (num == 1250){$('#horse').css('right',(num-=50)+'px')}
})
$('.btn.right').click(()=>{
    let right = num -= 50
    $('#horse').css('right',right+'px')
    if (num == -50){$('#horse').css('right',(num+=50)+'px')}
})

// 키보드 방향키로 말의 위치를 이동
$('body').on('keydown',(event)=>{
    console.log(event.keyCode)

    if (event.keyCode==37){
        let left = num += 50
        $('#horse').css('right',left+'px')
        if (num == 1250){$('#horse').css('right',(num-=50)+'px')}
       

    }else if(event.keyCode==39){
        let right = num -= 50
        $('#horse').css('right',right+'px')
        if (num == -50){$('#horse').css('right',(num+=50)+'px')}

    }else if (event.keyCode==32){
        // animate()함수
        // css 속성들을 이용해서 애니메이션을 수행하는것
        // 단, 수치형 속성값으로만 가능하다.
        // ex) width, height, left등 가능
        // background-color 등 불가능

        //.animate(css 속성들 , 속도)
        $('#horse')
        .animate({bottom:'400px'},'fast')
        .animate({bottom:'200px'},'fast')
        // .css('bottom','400px')
        // .css('bottom','200px')
        //연속적인것을 행할때는 animate 속성을 이용한다. 

    }



})
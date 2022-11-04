function hello(){

    alert("환영합니다.")

}

function check(){
   
    let join_id=document.getElementById("join_id").value;
     alert(join_id);
    $.document.ready(function(){  
        $.ajax({
            url:"http://192.168.70.169:5036/check",
            type:"post",
            data:join_id,
            success: function(res){
            //alert('성공!')
                alert(join_id)
                alert(res.value)
            },
            error:function(){
                alert(join_id)
                //alert('실패')
                alert(res.value)
        }

    })
   
     })

     //check라는 경로로 id를 보내서 
     //만약 중복이라면
     //"중복입니다" alert
     //중복이 아니라면,
     // 사용가능한 id 입니다 alert

}
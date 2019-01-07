$(document).ready(function(){
    $.ajax({
        url:"http://mcq.micequan.cn/questionCtrl/find.do",
        type:"post",
        async:true,
        data:{area:"moren"},
        dataType:"json",
        success:function(data){
            
            //Do something here
            if($.isEmptyObject(data)){
                $("#myModals").hide();
                $("#myModal").show();
            }else{
                var uncontent = "";
                if($.isEmptyObject(data.image_url)){
                    uncontent = "<h3>" + data.title + "</h3>";
                }else{
                    uncontent = "<img src='" +data.image_url + "'>"
                }
                $(".kuandu").html(uncontent);
                $("#joins").attr("onclick","window.location.href = '"+data.title_link+"'");
                $("#myModals").show();
                $("#myModal").hide();
            }
        },
        error:function(){

        }
    });
});

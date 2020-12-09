var arr=[];var i=0; var x2="";
$("document").ready(function(){
    $("#add").click(function(){
        var x=$("#inp");
        console.log(i);
        arr[i]=x.val();
        var y=$("#Incomplete");
        var z=`<input type='checkbox' id='check${i}' class="chkB" >`
        var inp1=`<input type="text" style="width: 20%;" id="inp${i}" readonly>`
        var btn1=`<input type="button" value="Edit" id="edit${i}" class="editC">`
        var btn2=`<input type="button" value="Delete" id="delete${i}" class="delC">`
        var y2=inp1+btn1+btn2;
        var content=`<span id="con${i}">${x.val()}</span>`
        x.val("");
        var y1=y.html()+`<li id="ulli${i}">`+z+content+y2+"</li>";
        y.html(y1);
        i=i+1;
        $(".editC").unbind().click(function(){
            // debugger;
            // alert('aesfaes');
            var val1=this.id;
            var j=val1.substring(4,val1.length);
            var f=arr[j];
            $(`#inp${j}`).attr('readonly',false);
            if(x2==val1){
                $(`#con${j}`).html($(`#inp${j}`).val());
                $(`#inp${j}`).val("");
                $(`#inp${j}`).attr('readonly',true);
                x2='qw';
            }
            else{
            var c11= $(`#inp${j}`);
            c11.val($(`#con${j}`).html());
            x2=val1;
            }
            
        });
        $(".delC").unbind().click(function(){
            var val2=this.id;
            var j=val2.substring(6,val2.length);
            console.log(j);
            $(`#ulli${j}`).remove();
        });
        $(".chkB").unbind().click(function(){
            var val3=this.id;
            var j=val3.substring(5,val3.length);
            var ch1=$(`#check${j}`);
            if(ch1.is(':checked')){
                var z22= $(`#ulli${j}`)
                z22.appendTo('#Completed');
            }
            else{
                var z22= $(`#ulli${j}`);
                z22.appendTo('#Incomplete');
            }
        });
    });
});

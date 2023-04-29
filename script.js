let enroll_now = document.getElementById('enroll_now');
document.getElementById('enroll_now').addEventListener('click', function (event) {
    var values=[];
    var checkboxes=document.getElementsByName('skills');
    for(var i=0; i<checkboxes.length; i++){
        if(checkboxes[i].checked==true){
            values.push(checkboxes[i].value);
        }
    }
        var imgurl=document.getElementById('imagename').value;
        var img=document.createElement('img');
        img.src=imgurl;
        img.style.height="100px";
        img.style.width="100px";
        img.style.marginBottom="40px";

        document.getElementById('paste').innerHTML += `
        <div class="enrolled" style="border:3px solid green; padding:10px; margin:10px;">
        <span id="img_show" style="float:right; width:100px; height: 100px;"></span>
        <span id="task_name">
        ${document.getElementById('name').value}<br>
        ${document.getElementById('email').value}<br>
        ${document.getElementById('website').value}<br>
        ${document.querySelector("input[type=radio]:checked").value}<br>
        ${values.toString()}
        </span>
        </div>
        `
        document.getElementById('img_show').appendChild(img);
            ;
                    })
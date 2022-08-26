

        document.getElementById('open-modal').addEventListener('click', function(){
            document.querySelector('.hidden').classList.remove('hidden');
            document.querySelector('#open-modal').classList.add('hidden');
        });
        var active = false;
        var selectedRow = null;
        var btn = document.querySelector(".button");
        btn.addEventListener("click", employdata);
        
        
        function employdata(){
          var ax = read_Input_Value();
          if (selectedRow == null){
            create_Tr_Td(ax);
            remove_input_value();
          }
          else{   
            updatefunc(ax); 
            remove_input_value(); 
            selectedRow = null;
          }

        }

            
        
        function read_Input_Value(){
          var redemp={} 
          redemp["ename"] = document.querySelector(".empname").value;
          redemp["email"] = document.querySelector(".email").value;
          redemp["mob"] = document.querySelector(".mobile").value;
          redemp["location"] = document.querySelector(".location").value;
            redemp["status"] = document.querySelector(".status").value;
            redemp["password"] = document.querySelector(".password").value;
          return redemp
        }
        function create_Tr_Td(x){
            
            if(emp_td7 == active){
              active = "Active";
            }else{
              active = "Inactive";
            }
          var empTable = document.querySelector(".list");
          var emp_tr = empTable.insertRow(empTable.length);
          var emp_td1 = emp_tr.insertCell(0);
          var emp_td2 = emp_tr.insertCell(1);
          var emp_td3 = emp_tr.insertCell(2);
          var emp_td4 = emp_tr.insertCell(3);
          var emp_td8 = emp_tr.insertCell(4);
          var emp_td5 = emp_tr.insertCell(5);
            var emp_td7 = emp_tr.insertCell(6);
           var emp_td6 = emp_tr.insertCell(7);

          var totalRowCount = document.querySelector(".list tr").length;
          emp_td1.innerHTML = empTable.rows.length-1;
          //Note:- .rows.length = return no of row 
        
          emp_td2.innerHTML = x.ename;   
            emp_td3.innerHTML = x.email;
            emp_td4.innerHTML = x.mob;
          emp_td5.innerHTML = x.location;
          
          emp_td6.innerHTML = '<a class="edt" onClick="onEdit(this)">Edit</a>  / <a class="dlt" onClick="onDelete(this)">Delete</a> / <a onClick="onRead(this)">Read</a> ';
            emp_td7.innerHTML = active;
            emp_td8.innerHTML = x.password;
            
            var arr = [x.ename, x.email, x.mob, x.location, x.password,emp_td7.innerHTML];
            console.log(arr);
            // let src2 = "index.php?arr=" + arr[0] + "," + arr[1]  + "," + arr[2] + "," + arr[3] + "," + arr[4] + "," + arr[5];
            //     window.location.href = src2;
            //     console.log(arruy2);
            // being able to drag and drop the rows
            

  
            
        }
        
        function remove_input_value(){
          document.querySelector(".empname").value= " ";
          document.querySelector(".email").value= " ";
          document.querySelector(".mobile").value= " ";
          document.querySelector(".location").value= " ";
            document.querySelector(".status").value= " ";
            document.querySelector(".password").value= " ";

        }
        
        function onEdit(y){
          console.log(y);
        
          //var selecteventbtn = document.querySelector("a.edt");
            selectedRow = y.parentElement.parentElement;
            //document.querySelector(".empid").value = selectedRow.cells[0].innerHTML;
            document.querySelector(".empname").value = selectedRow.cells[1].innerHTML;
            document.querySelector(".email").value = selectedRow.cells[2].innerHTML;
             document.querySelector(".mobile").value = selectedRow.cells[3].innerHTML;
            document.querySelector(".location").value = selectedRow.cells[5].innerHTML;            
            document.querySelector(".status").value = selectedRow.cells[6].innerHTML;
            document.querySelector(".password").value = selectedRow.cells[4].innerHTML;

        }
        function onRead(y){
          console.log(y);
        
          //var selecteventbtn = document.querySelector("a.edt");
            selectedRow = y.parentElement.parentElement;
            //document.querySelector(".empid").value = selectedRow.cells[0].innerHTML;
            document.querySelector(".empname").value = selectedRow.cells[1].innerHTML;
            document.querySelector(".email").value = selectedRow.cells[2].innerHTML;
             document.querySelector(".mobile").value = selectedRow.cells[3].innerHTML;
            document.querySelector(".location").value = selectedRow.cells[5].innerHTML;
            document.querySelector(".status").value = selectedRow.cells[6].innerHTML;
            document.querySelector(".password").value = selectedRow.cells[4].innerHTML;
            // alert with all information
            alert("Name: " + selectedRow.cells[1].innerHTML + "\n" + "Email: " + selectedRow.cells[2].innerHTML + "\n" + "Mobile: " + selectedRow.cells[3].innerHTML + "\n" + "Location: " + selectedRow.cells[5].innerHTML + "\n" + "Status: " + selectedRow.cells[6].innerHTML + "\n" + "Password: " + selectedRow.cells[4].innerHTML);
            

        }
        
        function updatefunc(redemp){
          selectedRow.cells[1].innerHTML = redemp.ename;
          selectedRow.cells[2].innerHTML = redemp.email;
          selectedRow.cells[3].innerHTML = redemp.mob;
          selectedRow.cells[5].innerHTML = redemp.location;
            selectedRow.cells[6].innerHTML = redemp.status;
            selectedRow.cells[4].innerHTML = redemp.password;
          
        }
        
        
        function onDelete() {
            if (confirm('Are you sure to delete this record ?')) {
                var selectdelete = document.querySelector("a.dlt");
                selectdelete = selectdelete.parentElement.parentElement.remove(0);
            }
        }
        


        // 
        $(".row_position").sortable({
        delay: 150,
        stop: function() {
            var selectedData = new Array();
            $(".row_position>tr").each(function() {
                selectedData.push($(this).attr("id"));
            });
            updateOrder(selectedData);
        }
    });

    // function updateOrder(aData) {
    //     $.ajax({
    //         url: 'ajaxPost.php',
    //         type: 'POST',
    //         data: {
    //             allData: aData
    //         },
    //         success: function() {
    //             alert("Your change successfully saved");
    //         }
    //     });
    let ball = document.querySelector(".list tr");
    ball.onmousedown = function(event) {

      let shiftX = event.clientX - ball.getBoundingClientRect().top;
      let shiftY = event.clientY - ball.getBoundingClientRect().bottom;
    
      ball.style.position = 'absolute';
      ball.style.zIndex = 0;
      document.body.append(ball);
    
      moveAt(event.pageX, event.pageY);
    
      // moves the ball at (pageX, pageY) coordinates
      // taking initial shifts into account
      function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
      }
    
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }
    
      // move the ball on mousemove
      document.addEventListener('mousemove', onMouseMove);
    
      // drop the ball, remove unneeded handlers
      ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
      };
    
    };
    
    ball.ondragstart = function() {
      return false;
    };
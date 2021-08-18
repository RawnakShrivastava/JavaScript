const getTextData = () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET' , 'sample.txt' ,true);  
    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
            document.getElementById("text-data").innerHTML = this.responseText;
        }
    }
    xhr.send();
}

const getUsers = () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function(){
        if(this.status == 200){
            var users = JSON.parse(this.responseText);
            var output = '';
            for(var i in users){
                output += '<ul>'+
                '<li> ID :'+ users[i].id +'</li>' +
                '<li> Name :  '+ users[i].name +'</li>' +
                '<li> City : '+ users[i].city +'</li>' +
                '</ul>';
                document.getElementById("users").innerHTML = output;
            }
        }
    }
    xhr.send();
}
const getUser = () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);
    xhr.onload = function(){
        if(this.status == 200){
            var user = JSON.parse(this.responseText);
            var output = '';
                output += '<ul>'+
                '<li> ID :'+ user.id +'</li>' +
                '<li> Name :  '+ user.name +'</li>' +
                '<li> City : '+ user.city +'</li>' +
                '</ul>';
                document.getElementById("user").innerHTML = output; 
        }
    }
    xhr.send();
}

const getData = () => {
    var xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://reqres.in/api/users?page=2' , true);
    xhr.open('GET','http://stage-mediaflux.cloud.junctiontv.net/matchpoint/1.0/ui/s3file/cinedigm/list/',true);
    xhr.onload = function(){
        if(this.status == 200){
            // var users = JSON.parse(this.responseText);
            var users = jQuery.parseJSON(this.responseText);
            
            // console.log(users.data);
            var output = '';
            for(var i in users.list){
                output += 
                '<ul>'+
                // '<img src="'+users.list[i].avatar+'" alt="">'+
                '<li> ID :'+ users.list[i].uid +'</li>' +
                '<li> Name : '+ users.list[i].name +'</li>' +
                '<li> Email :  '+ users.list[i].fullpath +'</li>' +
                '<li> Customer :  '+ users.list[i].cust +'</li>' +
                '<li> Bucket :  '+ users.list[i].bucket +'</li>' +
                '<li> Type :  '+ users.list[i].type +'</li>' +
                // '<li> Format :  '+ users.list[i].profile.video_format +'</li>' +
                // '<li> Job Name :  '+ users.list[i].pre_pross_status.job_name +'</li>' +
                '</ul>';
                document.getElementById("user-api").innerHTML = output; 
            }

        //     var html = '<table class="table table-striped" id="api-table">';
        //     html += '<tr>';
        //     var flag = 0;
        //     $.each(users.list[0], function(index, value){
        //         html += '<th>'+index+'</th>';
        //     });
        //     html += '</tr>';
        //      $.each(users.list, function(index, value){
        //          html += '<tr>';
        //         $.each(value, function(index2, value2){
        //             html += '<td>'+value2+'</td>';
        //         });
        //         html += '<tr>';
        //      });
        //      html += '</table>';
        //      $('body').html(html);
        }

    
    }
    xhr.send();
};
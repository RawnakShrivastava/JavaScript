var replies = [
    'Hey! how are you doing?',
    'What are you looking for?',
    'So its funny how this all feels like AI isnt it?',
    'Lets make the web a better place',
    'See you later',
    'Im Suman',
    'This is my automated message'
]
var user1ChatArr = [];
var user2ChatArr = [];
var user3ChatArr = [];
var user4ChatArr = [];
var user5ChatArr = [];
var user6ChatArr = [];

function postMessage(){
    setTimeout(() => {
        var myMessage = $("#userInput").val();
        var li = document.createElement("li");
        var node = document.createTextNode(myMessage);
        li.appendChild(node);
        document.getElementById("chatbox").appendChild(li);
        li.classList.add("sentMessage");
        if($("#Janet_chatBox")) user1ChatArr.push(myMessage); 
        $("#userInput").val(""); 
        getMessage();

        user1ChatArr.push(myMessage + reply);
    }, 200);
}
function getMessage(){
    setTimeout(() => {
        var num = Math.floor(Math.random() * 7);
        var reply = replies[num];
        var li = document.createElement("li");
        var node = document.createTextNode(reply);
        if($("#Janet_chatBox")) user1ChatArr.push(reply) ; 
        li.appendChild(node);
        document.getElementById("chatbox").appendChild(li);
        li.classList.add("recievedMessage");
        return reply;
    }, 2000);
}

user1ChatArr.forEach((el) => {
    console.log(el)
});


// Sidebar
function getUsersList(){
    var url = "https://reqres.in/api/users?page=1";
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload = function(){
        var name ;
        var email;
        var avatar;
        var html = '';
        var id ;
        if(this.status === 200){
            var resp = jQuery.parseJSON(this.responseText);
            var userData = resp.data;
            // console.log(userData);
            userData.forEach((el) => {
                id = el.id;
                name = el.first_name;
                email = el.email;
                avatar = el.avatar ;
    
                html += '<div class="user" id = "user_'+id+'">';
                html += '<img src="'+avatar +'" alt="">';
                html += '<div class="name">'+ name +'</div>';
                html += '</div>';
            });
            $(".user-info").hide();
            $("#sidebarUserNav").html(html);
            userData.forEach((el) => {
                // console.log(el);
                $("#user_" + el.id).click(function(){
                    $(".user-info").show();
                    console.log("clicked.. " + el.id);
                    $("#user_chatBox").attr("id", el.first_name + "_chatBox");
                    $(".user-info img").attr("src",el.avatar);
                    $(".user-info .name").html(el.first_name);
                })
            });
        }
    }
    xhr.send();
}

getUsersList();




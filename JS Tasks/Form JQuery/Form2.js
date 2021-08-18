$(document).ready(function () {
    $("#ckbCheckAll").click(function () {
        $(".checkBoxClass").prop('checked', $(this).prop('checked'));
    });
    // console.log($(".checkBoxClass").length);
    $(".checkBoxClass").change(function(){
    if($(".checkBoxClass:checked").length == $(".checkBoxClass").length){
        $("#ckbCheckAll").prop('checked', true);
        }
        else{
            $("#ckbCheckAll").prop('checked', false);
        }
    });
// Add Field
    $(".add-field").click(function (e){
        e.preventDefault();

        var max_fields = 10;
        var wrapper = $(".fields"); 
        var x = 0; 
            if(x < max_fields){ 
                if()    
                x++;
                $(wrapper).append('<div class = "field"><label for="">Name : </label><input type="text" class="name" name="name"> <label for="">Email : </label><input type="text" class="email" name="email"> <label for="">KeyWords :</label><input type="text" class="keywords" name="keywords"> <button type ="submit" class = "remove-field">Delete</button></div>'); 
            }     
            $(wrapper).on("click",".remove-field", function(e){
                e.preventDefault(); 
                $(this).parent('div').remove(); 
                --x;
            })
    });
    $(".submit-form").click(function(e){
        e.preventDefault();
        var FilledData = [];    

            var names  = [];            
            $('input[name^=name').each(function(){
                names.push($(this).val());
            });
            // console.log(names);  
            var emails = [];         
            $('input[name^=email').each(function(){
                emails.push($(this).val());
            });
            // console.log(emails);
            var keywords  = [];  
            $('input[name^=keyword').each(function(){
                keywords.push($(this).val());
            });
            // console.log(keywords);
            for( var i = 0 ; i < $('.field').length ; i++){
                const data = {
                    name : names[i],
                    email : emails[i],
                    keywords : keywords[i]
                }
                FilledData.push(data);
            }
        console.log(FilledData);
        
    });
});




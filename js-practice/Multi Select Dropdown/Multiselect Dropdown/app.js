$(document).ready(function() {
    $("#my-select").multiSelect();
    $('#select-all').click(function(){
        $('#my-select').multiSelect('select_all');
        return false;
      });
});
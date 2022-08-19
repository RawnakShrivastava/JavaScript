// function format ( d ) {
//     // `d` is the original data object for the row
//     return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="panel">'+
//         '<tr>'+
//             '<td>Full name:</td>'+
//             '<td>'+d.name+'</td>'+
//         '</tr>'+
//         '<tr>'+
//             '<td>ID:</td>'+
//             '<td>'+d.id+'</td>'+
//         '</tr>'+
//         '<tr>'+
//             '<td>UID:</td>'+
//             '<td>'+d.uid+'</td>'+
//         '</tr>'+
//         '<tr>'+
//             '<td>Extra info:</td>'+
//             '<td>And any further details here (images etc)...</td>'+
//         '</tr>'+
//     '</table>';
// }
// function openActions(markStatus) {
//     return '<ul class="action-pannel">' + 
//     '<li><button type = "submit">Update</button></li>' + 
//     '<li><button type = "submit" class = "btn-delete">Delete</button></li>' + 
//     '<li><button class ="btn-mark">'+ markStatus +'</button></li>' +  
//     '</ul>'
// }
// function loadFile(e) {
//     var image = document.getElementById('output');
//     image.src = URL.createObjectURL(e.target.files[0]);
//     // console.log("Image Uploaded...");
// }
$(document).ready(function() {
    var table = $('#example2').DataTable( {
            'responsive' : true,
            "ajax" : {
                'url' : './JSON/api3.json',
                'dataSrc' : 'data'
            },
            // 'select' : true,
            'columns' : [
                {
                    "className":      'details-control',
                    "orderable":      false,
                    "data":           null,
                    "defaultContent": ''
                },
                {
                    "className":      'outputContainer',
                    "orderable":      false,
                    "data":           null,
                    "defaultContent": '<img id="output" width="200"/>'
                },
                {'data' : 'id'},
                // {'data' : 'uid',
                //     render : function(data,type,row){
                //         const firstPart = row.uid.split("_")[0]
                //         return firstPart
                //     }
                // }, 
                // {'data' : 'item_id'},
                {'data' : 'name'},
                {'data' : 'cust'},
                {'data' : 'status'},
                {
                    "className":      'image-uploader',
                    "orderable":      false,
                    "data":           null,
                    "defaultContent": '<input class="image-uploader" type="file"  accept="image/*" name="image" id="file"  onchange="loadFile(event)">'
                },
                // {
                //     "className":      'action-button',
                //     "orderable":      false,
                //     "data":           null,
                //     "defaultContent": ''
                // }
            ],

            dom: 'Bfrtip',
            // buttons: [
            //     {
            //         text: 'My button',
            //         action: function ( e, dt, node, config ) {
            //             alert( 'Button clicked' );
            //         }
            //     }
            // ],
            // buttons: [
            //     {
            //         text: 'Row selected data',
            //         action: function ( e, dt, node, config ) {
            //             var selectedData = [];
            //             var rowData = JSON.stringify(dt.row({ selected : true }).data());
            //             console.log(rowData);
            //             selectedData.push(rowData);
            //             console.log(selectedData[0]);
            //             alert(
            //                 'Row data: '+
            //                 JSON.stringify( dt.row( { selected: true } ).data() )
            //             );
            //         },
            //         enabled: false
            //     },
            //     {
            //         text: 'Count rows selected',
            //         action: function ( e, dt, node, config ) {
            //             alert( 'Rows: '+ dt.rows( { selected: true } ).count() );
            //         },
            //         enabled: false
            //     }
            // ]
        } );
        // table.on( 'select deselect', function () {
        //     var selectedRows = table.rows( { selected: true } ).count();
        //     table.button( 0 ).enable( selectedRows === 1 );
        //     table.button( 1 ).enable( selectedRows > 0 );
        // } );
        $('#example2 tbody').on('click', 'td.details-control', function () {
            var tr = $(this).closest('tr');
            var row = table.row(tr);
            if ( row.child.isShown() ) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            }
            else {
                // Open this row
                row.child( format(row.data()) ).show();
                // row.child().addClass('panelArea');
                tr.addClass('shown');
            }
        } );
        var markedStatus = 'Mark';
        $("#example2 tbody").on('click','td.action-button', function() {
            var td = $(this).closest('td');
            var pannelAlreadyOpen = td.hasClass("action-clicked");
            // console.log(`Pannel Open : ${pannelOpen}`);
            if(pannelAlreadyOpen){
                td.removeClass("action-clicked");
                $("td ul.action-pannel").remove();
            }
            else{
                td.addClass("action-clicked");
                td.append(openActions(markedStatus));
            }
        })
        $("#example2 tbody").on("click","button.btn-mark",function(){
            var tr = $(this).closest('tr');
            if(tr.hasClass("marked")){
                tr.removeClass("marked");
                markedStatus = 'Mark'
            }
            else{
                tr.addClass("marked");
                markedStatus = 'UnMark';
            }
        })
        $("#example2 tbody").on("click","button.btn-delete",function(){
            var tr = $(this).closest('tr');
            tr.remove();
            console.log("Data Removed");
        })
        $("#example2 tbody").on("click",".image-uploader",function(){

        })
});

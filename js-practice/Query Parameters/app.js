const URL = 'http://api.plos.org/'+
            '?q=title:'+
            '%22Drosophila'+
            '%22%20and%20body:'+
            '%22RNA'+
            '%22'+
            '&fl=id,abstract'+
            '&filter=hardcover'

const a = window.document.createElement('a');
a.href = URL ;

let params = new URLSearchParams(a.search);

console.log(params.get('fl'));
console.log(params.get('filter'));
params.delete('filter');

const first = URL.split('?')[0]
const newParams = params.toString();
const URLWithoutfilter = `${first}+${newParams}`;
document.getElementById("params").append(URLWithoutfilter);
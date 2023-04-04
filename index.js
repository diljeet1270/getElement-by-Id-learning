function sales(val){
    let elem = document.getElementById('qty');
    let quantity = + elem.innerHTML;
    elem.innerHTML = quantity + val;
}
let persons=[
    {name:'Bob', email:'apple@bnana.com', phone:2143434},
    {name:'Mary', email:'heape@bnana.com', phone:21435444},
    {name:'Rohit', email:'herle@bnana.com', phone:21556534},
    {name:'Shallu', email:'announcle@bnana.com', phone:55543434}
]
function show(index){
    let person = persons[index]
    let elem = document.getElementById('pers');
    let str = '<h3>'+person.name+'<h3>'
    str += '<h3>'+person.email+'<h3>'
    str += '<h3>'+person.phone+'<h3>'
    elem.innerHTML = str;
}
function clearData(){
    let elem = document.getElementById('pers');
    elem.innerHTML = ''
}

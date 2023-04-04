let names = ['Steven Price', 'Anna Mathews', 'Rohit Raja', 'Ashish Kohli', 'julia Day', 'Nikita Batra'];
function showNames(){
    let namesMap = names.map((na)=>{
        return '<li>'+na+'</li>';
    });
    let str = '<ol>'+ namesMap.join('') + '</ol>'
    let element = document.getElementById('ListOfNames');
    element.innerHTML = str;
}
function clearNames(){
    let element = document.getElementById('ListOfNames');
    element.innerHTML = '';
}
function sortAsc(){
    names.sort(sortAsci);
    showNames();
}
function sortAsci(name1, name2){
    return name1.localeCompare(name2)

}
function sortDesc(){
    names.sort(sortDesci);
    showNames();
}
function sortDesci(name1, name2){
    return -1*name1.localeCompare(name2)

}
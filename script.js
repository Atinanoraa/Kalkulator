function insert(num){
    $('.output').val($('.output').val() + num);
}
function eql(){
    $('.output').val(eval($('.output').val()));
}
function c(){
    $('.output').val('');
}
function ce(){
    value = $('.output').val();
    $('.output').val(value.substring(0, value.length - 1));
}
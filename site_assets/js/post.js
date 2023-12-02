function post_all_get_data(){
    fetch('https://script.google.com/macros/s/AKfycbzILbtdUqEVA76vNP8TrXoeGZxbX_gSOUpMSwBzUcNzSkN1EIxYpZ2zIU04jR52JUDL/exec?mode=0', { mode: 'no-cors' });
};
function post_all_remove_data(){
    fetch('https://script.google.com/macros/s/AKfycbzILbtdUqEVA76vNP8TrXoeGZxbX_gSOUpMSwBzUcNzSkN1EIxYpZ2zIU04jR52JUDL/exec?mode=1', { mode: 'no-cors' });
};
function post_add_data(){
    fetch('https://script.google.com/macros/s/AKfycbzILbtdUqEVA76vNP8TrXoeGZxbX_gSOUpMSwBzUcNzSkN1EIxYpZ2zIU04jR52JUDL/exec?mode=accountAddData&email=&name=&password=', { mode: 'no-cors' });
};
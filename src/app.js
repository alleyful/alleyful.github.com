//const tplList = require('./list.hbs');
import tplList from './list.hbs';
//const tplMain = require('./main.hbs');
import tplMain from './main.hbs';
import ajax from './ajax.js';

ajax('/data.json', function(data){
    return data+1;
});
ajax('/data.json', data => data+1);



[].map(v = v+1);
[{price:300}].filter(v => {
    return v.price > 200
})

const $ = require('jquery');

$('#root').html(tplMain);


const list = [{
    href: 'http://www.naver.com',
    name: 'naver'
},{
    href:'http://www.daum.net',
    name:'daum'
}];

$('[data-view="list"]').html(tplList({
    list: list
}));
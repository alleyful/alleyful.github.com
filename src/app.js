import tplList from './list.hbs';
import tplMain from './main.hbs';
import tplTable from './table.hbs';
import tplWeather from './weather.hbs';
import ajax from './ajax.js';
const $ = require('jquery');

$('#root').html(tplMain);

const createTable  = () => {
    ajax('https://raw.githubusercontent.com/suhokim2/suhokim2.github.com/master/data.json', data => {
        const tableList = data.fruits.map(fruit => {
            return {
                name: fruit.name,
                quantity:fruit.quantity,
                price:fruit.price
            }
        });
        const tableTotal = fruitSum(tableList);
        $('#tableBox').html(tplTable({
             tableList:tableList,
             tableTotal:tableTotal
        }));
    });
}

const createWeather  = () => {
    ajax('http://api.openweathermap.org/data/2.5/forecast/daily?q=seoul&mode=json&units=metric&cnt=7&apikey=8d554a626fc5d01d77812b612a6de257', data => {
        // const weatherList = data.list.map(weather => {
        //     return {
        //
        //     }
        // })
        console.log(data);
        // $('#tableBox').html(tplWeather({
        //     weatherList:weatherList
        // }));
    });
}

const fruitSum = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].quantity * arr[i].price;
    }
    return result;
};

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


$('#btnTable').on('click',(e) => {
    if($('#btnTable').hasClass('mdl-button--accent')){
        $('#tableBox').html('');
        $('#btnTable').removeClass('mdl-button--accent');
    } else {
        $('#btnTable').addClass('mdl-button--accent');
        createTable();
    }
});

$('#btnWeather').on('click',(e) => {
    if($('#btnWeather').hasClass('mdl-button--accent')){
        $('#tableBox').html('');
        $('#btnWeather').removeClass('mdl-button--accent');
    } else {
        $('#btnWeather').addClass('mdl-button--accent');
        $('#tableBox').html('');
        createWeather();
    }
});


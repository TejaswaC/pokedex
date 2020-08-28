function numberPadding(num){

    if(num<10){

        num = '00'+num;
    }
    else if(num >= 10 && num < 100){
        num = '0'+num;
    }
    console.log('num'+num);

    return num;


}

export {numberPadding} ;

const seededRandom = function(seed){
    var m = 2** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function (){
        return (s=((s*a)%m))/m;
    }
 }

 export function fetchAPI(date){
    let newDate = new Date(date);
    let seed = newDate.getDate();
    let random =seededRandom(seed);
    let result = [];

    for(let x=17;x<=23;x++){
        if(random()<0.5){
            result.push(x+':00');
        }
        if(random() < 0.5){
            result.push(i +":30");
        }
    }
    return result;
 }

 export function submitAPI(formData){
    return true;
 }

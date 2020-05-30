

let name1 = 'mayank';
let name2 = 'knayam';
let name3 = 'shete';



const isSame = (value1,value2)=>{
    const value1Map = getMap(value1);
    const value2Map = getMap(value2);
    for( let alp in value1Map){
        if ( value1Map[alp] != value2Map[alp] ){
            return false;
        }
    }
    return true;
}
const getMap = (value)=>{
    let alpVCount = {};
    for(let alp of value){
        alpVCount[alp] = alpVCount[alp] == undefined ? 1 : alpVCount[alp] + 1;
    }
    return alpVCount;
}

console.log(isSame(name1,name2));
console.log(isSame(name1,name3));
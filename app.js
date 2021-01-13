let myarr = [6,3,9,14,68,32,45,29]

let bubble  = (arr)=>{
    let length = arr.length;
    for (let i = 0 ; i<length;i++){
        for(let j  = 0 ; j < length; j++){
            if(arr[j]>arr[j+1]){
                let x = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]= x;
            }
        }
    }
    return arr;
}

console.log(bubble(myarr));
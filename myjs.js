function checkSnt(n){
    let flag=true
    for (let i = 2; i <= Math.sqrt(n) ; i++) {
        if (n%i==0){
            flag=false;
            break;
        }
    } return flag;
}
function snt(){
    let x = 1;
    let count=0;
    while (x>0){
        x++;
        if (checkSnt(x)){
            document.write(x + "-");
            count++;
        }
        if (count==20)
            break;
    }
} snt()
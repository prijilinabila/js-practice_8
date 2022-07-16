var n=20;
for(i=2;i<=n;i++){
    var a=0;
    for(j=2;j<i;j++){
        if(i%j==0){
            a=1;
            j=j+1;
           
        }
    }
    if(a==0){
        console.log('prime num is',i);
    }
}
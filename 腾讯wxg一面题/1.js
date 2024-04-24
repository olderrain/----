const arr=[[1,1], [3,6], [2,3]]
let n=arr.length
let k=0
let point1=[]
let point2=[]
for(let i=0;i<n-1;i++){
    for(let j=i+1;j<n;j++){
        let nk=(arr[j][1]-arr[i][1])/(arr[j][0]-arr[i][0])
        if(nk>k){
            k=nk
            point1=arr[i]
            point2=arr[j]
        }
    }
}

console.log([point1,point2]);
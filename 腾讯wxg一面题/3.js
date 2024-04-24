function threeSum(arr) {
  let left=0
  let right=0
  let n=arr.length
  let res=[]
  arr.sort((a,b)=>a-b)
  for(let i=0;i<n;i++){
      while(i>0&&arr[i]==arr[i-1]){
          continue
      }
      left=i+1
      right=n-1
      while(left<right){
          if(arr[i]+arr[left]+arr[right]==0){
              res.push(arr[i],arr[left],arr[right])
              left++
              right--
              while(left<right&&arr[left]==arr[left-1]){
                  left++
              }
              while(left<right&&arr[right]==arr[right+1]){
                  right--
              }
          }else if(arr[i]+arr[left]+arr[right]<0){
              left++
          }else{
              right--
          }
      }
  }
  console.log(res);
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
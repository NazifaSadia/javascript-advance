// break
const nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < nums1.length; i++) {
    if(nums1[i] > 3){
        break;
    }
    //console.log(nums1[i]);
}


// continue
const nums2 = [0, 1, 2, -3, 4, -5, 6, -7, 8, 9];

for (let i = 0; i < nums2.length; i++) {
    if(nums2[i] < 0){
        continue;
    }
    console.log(nums2[i]);
}
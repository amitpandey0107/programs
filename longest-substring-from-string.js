// Program to find the longest sub string from a word, sring
// Input: pwwkew
// Output: wke

let str = "pwwkew";
function longestSubString(str){
    let string = "";
    let ss = "";
    let arr = str.split("");
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(string.includes(arr[j])) {
                break
            } else {
                string += arr[j]
            }
        }
        if(ss.length < string.length){
            ss = string;
        }
        string= "";
    }
    return "Sub-string: " + ss + " and length: "+ss.length
}

console.log(longestSubString(str))
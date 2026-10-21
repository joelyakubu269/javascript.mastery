function likes(names) {
  // TODO
  if (names.length== 0) {
    return "no one likes this"
  }
  let message
  let rems= names.length - 2
  
    
 if (names.length>=4) {
message=`${names[0]}, ${names[1]} and ${rems} others like this`
return message
 }else if(names.length == 3){
      message= names[0]  + ", " + names[1] + " and " + names[2] + " like this"
    return message
 }else if(names.length==2) {
    message= names[0]  + " and " + names[1] +  " like this"
    return message
 }else if(names.length==1) {
   message = names[0] + " likes this"
   return message
 }
    
}

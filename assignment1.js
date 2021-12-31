function convertToUpperCase(firstName,lastName)
{
      return firstName.toUpperCase()+" "+lastName.toUpperCase();
}
function getName(firstName,lastName,convertToUpperCase)
{
    return convertToUpperCase(firstName,lastName);
}
console.log(getName("vishnu","racharla",convertToUpperCase));

var getFirstChars =( firstName,lastName)=>{
    return firstName[0]+lastName[0];
}
console.log(getFirstChars("Roger","Water"));
console.log(getFirstChars("Vishnu","Racharla"));
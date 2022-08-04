const color = 'red';
if(color === 'green'){
    console.log('You are my green');
}
else if(color === 'yellow'){
    console.log('You are my yellow');
}
else if(color === 'red'){
    console.log('You are my red');
}
else if(color === 'blue'){
    console.log('You are my blue');
}
else if(color === 'pink'){
    console.log('You are my pink');
}
else{
    console.log('You are my black');
}
//switch

switch(color){
    case 'green':
        console.log('This is green');
        break;
    case 'red': 
        console.log('This is red');
        break;
    case 'yellow':
        console.log('This is yellow');
        break;
    case 'blue':
        console.log('This is blue');
        break;
    case 'pink':
        console.log('This is pink');
        break;
    default:
        console.log('This is black or defult');
      
}
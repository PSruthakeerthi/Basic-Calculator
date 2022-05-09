function calc(id){
    let result = document.getElementById("display");
    // if(id.innerHTML != '='){
    // result.innerHTML = result.innerHTML + id.innerHTML;
    // }
    // else if(id.innerHTML == '=')
    // result.innerHTML = eval(result.innerHTML);
    // else if(id.innerHTML == 'C')
    // result.innerHTML = ' ';

    switch(id.innerHTML){
        case '=' :
               try{
                result.innerHTML = eval(result.innerHTML); 
               }
               catch{
                result.innerHTML = 'ERROR!';
               }
                break;
        case 'C' :
                result.innerHTML = ' ';
                break;
        case '1' :
                result.innerHTML = result.innerHTML + id.innerHTML;
                break;
        case '2' :
                result.innerHTML = result.innerHTML + id.innerHTML;
                break;
        case '3' :
                result.innerHTML = result.innerHTML + id.innerHTML;
                break;  
        case '4' :
                result.innerHTML = result.innerHTML + id.innerHTML;
                break;  
        case '5' :
                result.innerHTML = result.innerHTML + id.innerHTML;
                break; 
        case '6' :
                result.innerHTML = result.innerHTML + id.innerHTML;
                break;
        case '7' :
                result.innerHTML = result.innerHTML + id.innerHTML;
                break;
        case '8' :
                result.innerHTML = result.innerHTML + id.innerHTML;
                break;
        case '9' :
                result.innerHTML = result.innerHTML + id.innerHTML;
                break;
        case '0' :
                result.innerHTML = result.innerHTML + id.innerHTML;
                break;
        case '+' :
                result.innerHTML = result.innerHTML + id.innerHTML;
                break;
        case '-' :
                result.innerHTML = result.innerHTML + id.innerHTML;
                break;
        case '/' :
                result.innerHTML = result.innerHTML + id.innerHTML;
                break;
        case '*' :
                result.innerHTML = result.innerHTML + id.innerHTML;
                break;
        default : result.innerHTML = 'ERROR';
    }
}


function domainName(url) {
    let result = '';
    
    for (let i = 0; i < url.length; i++) {
        
        if (url[i] === 'h' && url[i+1] === 't' && url[i+2] === 't' && url[i+3] === 'p' && url[i+4] === ':' && url[i+5] === '/' && url[i+6] === '/') {
            i += 7; 
            
        } else if (url[i] === 'h' && url[i+1] === 't' && url[i+2] === 't' && url[i+3] === 'p' && url[i+4] === 's' && url[i+5] === ':' && url[i+6] === '/') {
            i += 8;
            
        } 
        if (url[i] === 'w' && url[i+1] === 'w' && url[i+2] === 'w' && url[i+3] === '.') {
            i += 4;
           
        }

        
        if (url[i] !== '/' && url[i] !== '.' && url[i] !== ' ') {
            result += url[i]; 
        }
        
        if (url[i] === '.' || url[i] === '/') {
            break;
        }
    }

    return result;
}
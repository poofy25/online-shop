 const getObjFromUrl = function(location) {
    if(location.search){
    const uri = decodeURI(location.search);
    const chunks = uri.split('&');
    const params = Object();
      
    for (let i=0; i < chunks.length ; i++) {
        const chunk = chunks[i].split('=');
        chunk[1] = chunk[1].replace('%3D' , '=')
        chunk[0] = chunk[0].replace('?' , '')
  
            if( typeof params[chunk[0]] === 'undefined' ) {
                params[chunk[0]] = [chunk[1]];
  
            } else {
                params[chunk[0]].push(chunk[1]);
            }
  
  
        
    }
  
    return params;
  } else return null
  }

  export default getObjFromUrl
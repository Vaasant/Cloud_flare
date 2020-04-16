
let url1;
let url2;

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const response = await fetch('https://cfw-takehome.developers.workers.dev/api/variants')
  const parsed = await response.json()
  console.log(parsed.variants[0]);
  url1=parsed.variants[0];
  url2=parsed.variants[1];
  



  const response1 =await fetch(url1, {
    method: 'GET', 
    headers: {
      'Content-Type': 'text/html',
    },
  })  .then(function(response) {
    return response.text();
  }).then(function(data) {
    console.log("header"+url1);
    return data;
  });

 



  const response2 =await fetch(url2, {
    method: 'GET', 
    headers: {
      'Content-Type': 'text/html',
    },
  })  .then(function(response) {
    return response.text();
  }).then(function(data) {
    return data;
  });
  

/**************************************************************************************************/

const NAME = 'nameCookie-0'
const RESPONSE1 =  new Response(response1, { status: 200 ,headers: { 'content-type': 'text/html' }}) 
const RESPONSE2 = new Response(response2, { status: 200 ,headers: { 'content-type': 'text/html' }}) 



 const cookie = request.headers.get('Cookie')
console.log(cookie);

if (cookie && cookie.includes(`${NAME}=control`)) {
  return RESPONSE2
} else if (cookie && cookie.includes(`${NAME}=test`)) {
  return RESPONSE1
} else {
  let group = Math.random() < 0.5 ? 'RESPONSE1' : 'RESPONSE2' 
  let responseOutput = group === 'RESPONSE2' ? RESPONSE2 : RESPONSE1



  class ElementHandler {
    element(element) {
      this.nextText=''
      console.log(`Incoming element: ${element.tagName}`)
    }
  
  
    text(text) {
      console.log(text.text);

      this.nextText += text.text;
		if(text.lastInTextNode){
			if(this.nextText.includes('Variant')){
				text.replace(this.nextText.replace(/Variant/i,'& Vaasant Personal Profile'));
      }
      else if(this.nextText.includes('This is variant two')){
				text.replace(this.nextText.replace(/This is variant two of the take home project/i,'& Vaasant Personal Profile'));
      }
      else if(this.nextText.includes('This is variant one ')){
        text.replace(this.nextText.replace(/This is variant one of the take home project/i, '& Vaasant Personal Profile'));
      }
      
		}
      

    }
  }



  let htmlRequest= new HTMLRewriter().on('h1#title', new ElementHandler()).transform(responseOutput)
  let htmlRequest2= new HTMLRewriter().on('p#description', new ElementHandler()).transform(htmlRequest)





  class AttributeRewriter {
    constructor(attributeName) {
      this.attributeName = attributeName
    }
  
    element(element) {
      const attribute = 'https://vaasant.github.io/Vaasant_Portfolio_Angular_7/#/';
      
      if (attribute) {
        console.log(attribute);
        
        element.setAttribute(
          this.attributeName,
          attribute.replace('https://www.cloudflare.com/','https://vaasant.github.io/Vaasant_Portfolio_Angular_7/#/'),
        )
      }
    }

    text(text){
      console.log(text.text);
      text.replace(text.text.replace('Return to cloudflare.com', 'Vaasant Portfolio'))
    }

  }
  
  const rewriter = new HTMLRewriter()
    .on('a', new AttributeRewriter('href')).on('img', new AttributeRewriter('src'))

console.log(rewriter);




htmlRequest3=rewriter.transform(htmlRequest2)
htmlRequest3.headers.append('Set-Cookie', `${NAME}=${group}; path=/`)
  return htmlRequest3

}

  }
 






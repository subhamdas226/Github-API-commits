const got = require('got');
function initRoutes(app){
    const url = `https://api.github.com/repos/nodejs/node/commits`;
     app.get('/',(req,res)=>{
        
        var body;
        (async () => {
            try {
                const response = await got(url);
                //console.log(response.body);
                 body = JSON.parse(response.body);
                //console.log(body)
                //body = response.body;
                let links = [];
                
                for(let link=0; link<20; link++){
                    console.log(body[link].html_url,link+1);
                    let detail ={};
                    detail["name"] = body[link].commit.author.name;
                    detail["email"] = body[link].commit.author.email;
                    detail["url"] = body[link].html_url
                    detail["verified"] = body[link].commit.verification.verified;
                    links.push(detail);
                    console.log(links)
                }
                return res.render('index',{
                    links:links
                }); 
            } catch (error) {
                console.log(error.response.body);
            }
        })();
    })
}
module.exports = initRoutes;
const fetch = require("node-fetch");
const HTMLParser = require("node-html-parser");
const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors())
app.get("/", function (req, res) {
    fetch("https://www.2bike.rs/cikloberza/mali-oglasi/bicikli-6/mtb-bicikli-7?&fl11[]=38&fl11[]=50&fl11[]=51&fl11[]=62&fl11[]=63&fl11[]=null&fl15[]=95&fl15[]=null&prcu=EUR&prfr=398&prto=607&hideSold=1", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": "__cfduid=dc136090a3ed2d156361ba4a38e418cfa1599638574; _ga=GA1.2.1687245151.1599638575; __atssc=google%3B17; _gid=GA1.2.1836195618.1601041157; _apfcl_0034_91=NjM5MTg6OjI2ZTYxNTVmZTBmNzc3MGJjNjFlZTRmZDVlMTc3ZDNhOjpBRWQ5ODVjZjMwNWI0Y2VlMTQzYzkyMzI0MWJmMDMxZTVmRkY%3D; PHPSESSID=17od68d069lras3kca1i6srir3; REMEMBERME=Sm9zaXBvdmljXFRvYmlrZUJ1bmRsZVxFbnRpdHlcVXNlcjpaR0Z5YTI5dGRHTXhNVUJuYldGcGJDNWpiMjA9OjE2MzMxNjEwMDc6M2UwYTk3N2RiNmM0ZjI3YTcxYTY4OWY1NDZlNWQ2NmFjOGNhNjhjY2NiM2I3NzhiYmRhYWNmMDg0MjQ0MzQ1NQ%3D%3D; __atuvc=188%7C38%2C383%7C39%2C1352%7C40; __atuvs=5f77326e301ef0e214b; _gat=1"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors"
    })
        .then((x) => {return x.text();})
        .then((x) => {console.log(); return HTMLParser.parse(x)})
        .then((html) => {
            const total = Number(html.querySelector(".pagingWrapper").querySelector('.total').childNodes[4].childNodes[0].rawText);
            return res.json(total == Number(req.query.total));
        });
});

app.get("/test", (req, res)=>{
    return res.json(true);
})

app.listen(3000);


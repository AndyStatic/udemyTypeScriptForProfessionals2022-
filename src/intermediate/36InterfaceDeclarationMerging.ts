//Express Base
export interface Request {
    body: any;
}

//Express JSON
export interface Request {
    json: any;
}

//Our App
function handleRequest(req: Request){
    req.body;
    req.json;
}

//This is allowed by interfaces, i.e. to have 2 interfaces Request that are understood as only one merged
//types not allows this
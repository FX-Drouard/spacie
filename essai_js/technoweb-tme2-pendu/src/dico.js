fs = require('fs')


function litSync(filepath, minlength){
    const data = fs.readFileSync(filepath,'utf8')
    let tab = [];
    for(let mot of data.split('\n'))
        if(mot.length >= minlength)
            tab.push(mot)
    
    return tab;   
}



function lit(filepath, minlength){
    const p= new Promise((resolve,reject)=>fs.readFile(filepath,(err,data) =>{
        let tab = []
    
        for(let mot of data.toString().split('\n'))
            if(mot.length >= minlength)
                tab.push(mot)
         
        resolve(tab)

    }))

}


async function litAsync(filepath,minlength){
    const data = await fs.promises.readFile(filepath,'utf8')
    return Promise.resolve(data.toString().split("\n").filter((elem)=>elem.length >= minlength))
}


exports.litAsync = litAsync
exports.lit = lit
exports.litSync = litSync
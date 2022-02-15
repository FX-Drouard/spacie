const readline = require("readline")
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
class Pendu{
    constructor(word_to_find,max_errors){
        this.word_to_find = []
        for(let l of word_to_find)
            this.word_to_find.push(l)
        this.max_errors = max_errors || 5
        this.errors = 0
        this.foundcount = 0
        this.tab = []
        for(let l in word_to_find)
            this.tab.push('-')
    }

    show(){
        
        console.log("Erreurs : ", this.errors , "/", this.max_errors,"\n")
        let str = ""
        for(let elem of this.tab)
            str += elem
        console.log(str , "\n")

    }
    keypressed(c){
        let trouve = false
        for(let l in this.word_to_find)
            if(c == this.word_to_find[l]){
                this.tab[l] = c;
                this.word_to_find[l] = '_'
                trouve = true;
 
                break;
            }
        if(!trouve)
            this.errors = this.errors + 1
        if(this.errors == this.max_errors)
            return false
        let gagner = true
        for(let l of this.tab)
            if(l == '-')
                gagner = false
        
        if(gagner)
            return true            
    }

    play(){
        return new Promise((resolve,reject)=>
            { 
            const f = (str, key) => {
                this.show();
                if (key.ctrl && key.name === 'c') {
                    process.stdin.pause()
                } else {
                        console.log('You pressed the',key.name,'key');
                        let result = this.keypressed(key.name)
                        readline.cursorTo(process.stdout, 0,0)
                        readline.clearScreenDown(process.stdout)
                        this.show();
                        if(result){
                            resolve('gagner')
                        }
                        if(result === false){
                            reject('perdu')    
                        }
                }
            }
            process.stdin.on('keypress', f);
            })

        }
    }

exports.Pendu = Pendu




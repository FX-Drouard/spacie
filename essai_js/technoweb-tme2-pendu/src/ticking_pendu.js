const pendu = require("./pendu.js")
const readline = require("readline")
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

class PenduTemps extends pendu.Pendu {
    constructor(mot, tentatives, temps) {
        super(mot, tentatives)
        this.temps = temps
        this.date = new Date()
    }
    show() {
        console.log("temps", (new Date().getTime() - this.date.getTime()) / 1000)
        super.show()
    }
    play() {
        return new Promise((resolve, reject) => {
            const f = (str, key) => {
                this.show();

                if (new Date().getTime() / 1000 - this.date.getTime() / 1000 >= this.temps)
                    reject('perdu temps')
                if (key.ctrl && key.name === 'c') {
                    process.stdin.pause()
                } else {
                    console.log('You pressed the', key.name, 'key');
                    let result = this.keypressed(key.name)
                    readline.cursorTo(process.stdout, 0, 0)
                    readline.clearScreenDown(process.stdout)
                    this.show();
                    if (result) {
                        resolve('gagner')
                    }
                    if (result === false) {
                        reject('perdu tentatives')
                    }
                }
            }
            process.stdin.on('keypress', f);
        })
    }
}

exports.PenduTemps = PenduTemps


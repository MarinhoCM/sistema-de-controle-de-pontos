export class Player {
    constructor(name, guess, hit = false) {
        this.name = name;
        this.scores = 0;
        this.hit = hit;
        this.numberHits = 0;
        this.guess = guess;
    }

    add_scores(hit) {
        if (hit) {
            this.scores += (10 + this.guess);
            this.numberHits++;
        }
    }

    showInfos() {
        return `
            Nome: ${this.name},
            Pontuação: ${this.scores},
            Numero de Acertos: ${this.numberHits}
        `;
    }
}


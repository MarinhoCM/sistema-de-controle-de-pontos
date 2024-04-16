"""Arquivo responsável por armazenar a classe Scores"""

class Scores:
    def __init__(self: object, scores: int, guess: int) -> None:
        self.__scores = scores
        self.__guess = guess

    @property
    def guess(self: object) -> int:
        return self.__guess

    @property
    def scores(self: object) -> int:
        return self.__scores

    def game(self: object, is_round_winner: bool) -> None:
        if is_round_winner:
            self.scores = self.guess + 10

        return self.scores

    def __str__(self) -> str:
        return """
            Entidade responsável por representar os pontos dos usuários.
            Params: 
                guess: int
        """

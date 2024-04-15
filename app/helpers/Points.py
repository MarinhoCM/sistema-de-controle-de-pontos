import os, sys

# from typing import Tuple

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.dirname(SCRIPT_DIR))


class Points:
    def __init__(self: object, guess: int) -> None:
        self.__guess = guess

    @property
    def guess(self: object) -> int:
        return self.__guess

    def __str__(self) -> str:
        return """
            Entidade responsável por representar os pontos dos usuários
            
            Params: 
                guess: int
        """

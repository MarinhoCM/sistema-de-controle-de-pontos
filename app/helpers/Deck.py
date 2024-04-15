import os, sys
from typing import Tuple

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.dirname(SCRIPT_DIR))


class Deck:
    def __init__(self: object, quantity: int, name: str) -> None:
        self.__quantity = quantity
        self.__deck_name = name

    @property
    def quantity(self: object) -> int:
        return self.__quantity

    @property
    def deck_name(self: object) -> str:
        return self.__deck_name

    @staticmethod
    def is_even(number: int) -> bool:
        return number % 2 == 0

    @staticmethod
    def verify_quantity(quantity: int) -> bool:
        if quantity <= 1:
            return False
        elif quantity < 40:
            return False
        elif not isinstance(quantity, int):
            return False
        elif not Deck.is_even(quantity):
            return False
        return True

    def regiter(self: object) -> str | Tuple[int, str]:
        if self.verify_quantity(self.quantity):
            return self.quantity, self.deck_name
        else:
            return "Quantidade para o baralho inválida!"

    def __str__(self) -> str:
        return """
            Classe Deck:
                Responsável por armazenar as informações do baralho utilizado 
                nas partidas.
                Params: 
                    quantity: int -> name: str
        """

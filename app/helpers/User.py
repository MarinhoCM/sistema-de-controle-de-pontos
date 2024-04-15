import os, sys

# from typing import Tuple

# from Points import Points

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.dirname(SCRIPT_DIR))


class User:
    def __init__(self: object, name, is_admin: bool, is_winner: bool) -> None:
        self.__user_name = name
        self.__is_admin = is_admin
        self.__is_winner = is_winner

    @property
    def user_name(self: object) -> str:
        return self.__user_name

    @property
    def is_admin(self: object) -> bool:
        return self.__is_admin

    @property
    def is_winner(self: object) -> bool:
        return self.__is_winner

    def __str__(self: object) -> str:
        return """
            Class User:
                Entidade responsável por realizar o regitro e representação de 
                usuários.
                
                Params:
                    name: str -> is_admin: bool
        """

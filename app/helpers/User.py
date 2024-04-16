"""Arquivo responsável por armazenar a classe User"""


class User:
    def __init__(self: object, name: str, is_admin: bool) -> None:
        self.__user_name = name
        self.__is_admin = is_admin

    @property
    def user_name(self: object) -> str:
        return self.__user_name

    @property
    def is_admin(self: object) -> bool:
        return self.__is_admin

    def __str__(self: object) -> str:
        return """
            Entidade responsável por realizar o regitro e representação de 
            usuários.
            
            Params:
                name: str -> is_admin: bool
        """

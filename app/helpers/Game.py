"""Arquivo responsável por armazenar a classe Game"""

from Deck import Deck
from User import User

# from typing import List


class Game:
    def __init__(self: object, num_players: int, deck: Deck) -> None:
        self.num_players = num_players
        self.deck = deck
        self.players = []

    def add_player(self: object, user: User) -> None | str:
        if len(self.players) < self.num_players:
            self.players.append(user)
        else:
            return "Número máximo de jogadores atingido."

    def start_round(self: object) -> None:
        print("Iniciando uma nova rodada...")

    def record_guess(self: object, player: User, guess: int) -> None:
        print(f"Registrando o palpite de {player.user_name}: {guess}")

    def calculate_scores(self: object) -> None:
        print("Calculando as pontuações...")

    def record_winner(self: object, winner: User) -> None:
        print(f"O vencedor da partida é: {winner.user_name}")

"""Arquivo responsável por armazenar o núcleo do desenvolvimento do app"""

import os, sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.dirname(SCRIPT_DIR))

from helpers.Deck import Deck

d1 = Deck(name="Baralho Frânces", quantity=41)
print(d1.regiter())

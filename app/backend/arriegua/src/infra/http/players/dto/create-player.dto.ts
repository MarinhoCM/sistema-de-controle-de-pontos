import { IsNotEmpty, IsString } from "class-validator";



export class CreatePlayersDto {
    @IsString({message: "O campo `Nome` deverá ser um texto"})
    @IsNotEmpty({message: "O campo `Nome` não pode ser vázio"})
    name: string;
}
import { IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class IdParamDto {
    @IsMongoId({message: "O campo id deve ser válido"})
    id: string;
}

export class CreatePlayersBodyDto {
    @IsString({message: "O campo `Nome` deverá ser um texto"})
    @IsNotEmpty({message: "O campo `Nome` não pode ser vázio"})
    name: string;
}

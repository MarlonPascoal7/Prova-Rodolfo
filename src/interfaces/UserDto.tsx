import {Perfil} from './Perfil'
import {Address} from './Adress'

export interface UserDto {
    name: string;
    email: string;
    senha: string;
    foto?: string;
    tipoPerfil: Perfil;
    lstAddresses: Address[];
    unidade: string;
  }
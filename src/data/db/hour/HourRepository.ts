import Hour from "./Hour";

export default interface HourRepository {
    salvar(hour: Hour): Promise<Hour>
    excluir(hour: Hour): Promise<void>
    listarTodos(): Promise<Hour[]>
}
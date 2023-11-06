import Therapy from "./Therapy";

export default interface TherapyRepository {
    salvar(therapy: Therapy): Promise<Therapy>
    excluir(therapy: Therapy): Promise<void>
    listarTodos(): Promise<Therapy[]>
}
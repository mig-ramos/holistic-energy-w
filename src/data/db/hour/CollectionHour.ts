import Hour from "./Hour";
import HourRepository from "./HourRepository";
import { api } from "../../../services/apiClient";

export default class CollectionHour implements HourRepository {

    async salvar(hour: Hour): Promise<Hour> {

        if (hour?.id) {
            const id = hour?.id
            const response = await api.put(`/hour/up/${id}`, {
                hour: hour.hour,              
            })
            return response.data
        } else {
            const response = await api.post('/hour/add', {
                hour: hour.hour,
            })
            return response.data
        }
    }

    async excluir(hour: Hour): Promise<void> {
        const id = hour?.id
        const response = await api.delete(`/hour/${id}`, undefined)
        return
    }

    async listarTodos(): Promise<Hour[]> {

        const response = await api.get('/hour/available', undefined)
        return response.data ?? []
    }
}
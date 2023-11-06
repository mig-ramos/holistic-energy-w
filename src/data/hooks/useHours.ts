import { useEffect, useState } from "react";
import Hour from "../db/hour/Hour";
import HourRepository from "../db/hour/HourRepository";
import CollectionHour from "../db/hour/CollectionHour";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useHours() {
    const repo: HourRepository = new CollectionHour();

    const { tabelaVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()

    const [hour, setHour] = useState<Hour>(Hour.vazio());
    const [hours, setHours] = useState<Hour[]>([]);

    useEffect(listAll, []);

    function listAll() {
        repo.listarTodos().then((hours) => {
            setHours(hours);
            exibirTabela()
        });
    }

    function selecionarHour(hour: Hour) {
        // console.log(therapy.name);
        setHour(hour);
        exibirFormulario()
    }

    async function excluirHour(hour: Hour) {
        console.log(hour.id);
        await repo.excluir(hour);
        // console.log(therapy)
        listAll();
    }

    function novaHour() {
        setHour(Hour.vazio());
        exibirFormulario()
    }

    async function salvarHour(hour: Hour) {
        await repo.salvar(hour);
        console.log(hour);
        listAll();
    }

    return {
        
        hour,
        hours,
        excluirHour,
        novaHour,
        salvarHour,
        selecionarHour,
        listAll,
        tabelaVisivel,
        exibirTabela,
    }
}
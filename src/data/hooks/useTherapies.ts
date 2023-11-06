import { useEffect, useState } from "react";
import Therapy from "../db/therapy/Therapy";
import TherapyRepository from "../db/therapy/TherapyRepository";
import CollectionTherapy from "../db/therapy/CollectionTherapy";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useTherapies() {
    const repo: TherapyRepository = new CollectionTherapy();

    const { tabelaVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()

    const [therapy, setTherapy] = useState<Therapy>(Therapy.vazio());
    const [therapies, setTherapies] = useState<Therapy[]>([]);

    useEffect(listAll, []);

    function listAll() {
        repo.listarTodos().then((therapies) => {
            setTherapies(therapies);
            exibirTabela()
        });
    }

    function selecionarTherapy(therapy: Therapy) {
        // console.log(therapy.name);
        setTherapy(therapy);
        exibirFormulario()
    }

    async function excluirTherapy(therapy: Therapy) {
        console.log(therapy.id);
        await repo.excluir(therapy);
        // console.log(therapy)
        listAll();
    }

    function novaTherapy() {
        setTherapy(Therapy.vazio());
        exibirFormulario()
    }

    async function salvarTherapy(therapy: Therapy) {
        await repo.salvar(therapy);
        console.log(therapy);
        listAll();
    }

    return {
        
        therapy,
        therapies,
        excluirTherapy,
        novaTherapy,
        salvarTherapy,
        selecionarTherapy,
        listAll,
        tabelaVisivel,
        exibirTabela,
    }
}
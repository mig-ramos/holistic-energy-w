import { useState } from 'react';
import { InputText } from '../../../components/ui/InputText';
import Therapy from './Therapy';
import Botao from '../../../components/ui/Botao';
import { TextArea } from '../../../components/ui/TextArea';

interface FormularioProps {
  therapy: Therapy
  therapyMudou?: (therapy: Therapy) => void
  cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {

  const id = props.therapy?.id ?? null

  const[name, setName] = useState(props.therapy?.name ?? '')
  const[description, setDescription] = useState(props.therapy?.description ?? '')

  return (
  <div className={`mb-4`}>
    {id ? (
       <InputText label='Código' valor={id} somenteLeitura />
    ) : false}
    
      <InputText label='Nome' valor={name} valorMudou={setName} />
      <TextArea label='Descrição' rows={5} valor={description} valorMudou={setDescription} />
      <div className={`mt-4 md:flex`} >
        <Botao cor="blue" onClick={() => props.therapyMudou?.(new Therapy(name, description, id))}>
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao cor="gray" onClick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
  </div>
  );
}
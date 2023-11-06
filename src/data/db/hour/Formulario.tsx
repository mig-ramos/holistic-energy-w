import { useState } from 'react';
import { InputText } from '../../../components/ui/InputText';
import Hour from '../hour/Hour';
import Botao from '../../../components/ui/Botao';

interface FormularioProps {
  hour: Hour
  hourMudou?: (hour: Hour) => void
  cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {

  const id = props.hour?.id ?? null

  const[hour, setHour] = useState(props.hour?.hour ?? '')

  return (
  <div className={`mb-4`}>
    {id ? (
       <InputText label='Código' valor={id} somenteLeitura />
    ) : false}
    
      <InputText label='Hora' valor={hour} valorMudou={setHour} />
      <div className={`mt-4 md:flex`} >
        <Botao cor="blue" onClick={() => props.hourMudou?.(new Hour(hour, id))}>
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao cor="gray" onClick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
  </div>
  );
}
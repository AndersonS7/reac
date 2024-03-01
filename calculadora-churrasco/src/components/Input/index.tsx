interface IProps {
    minhaFunction: ( value: string) => void;
}

const Inpunt = ({ minhaFunction }: IProps) => {
    return (
        <>
            <h2>Componente INPUT</h2>
            <button onClick={() => minhaFunction("Escrever qualquer coisa")}>Acionar</button>
        </>
    )
}

export { Inpunt }
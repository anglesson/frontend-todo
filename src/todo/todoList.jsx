import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'isDone': ''}>{todo.description}</td>
                <td> 
                    <IconButton style='success' icon='check' title="Marcar como concluída"
                        hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}/> 
                    <IconButton style='warning' icon='undo' title="Marcar como não concluída"
                        hide={!todo.done}
                        onClick={() => props.handleMarkAsUndo(todo)} /> 
                    <IconButton style='danger' icon='trash-o' title="Excluir tarefa"
                        onClick={() => props.handleRemove(todo)} /> 
                </td>
            </tr>
        ))
    }

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
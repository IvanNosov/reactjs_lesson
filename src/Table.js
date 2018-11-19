import React, { Component } from 'react';


const TableHeader = () => <tbody></tbody>;

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>X</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

export default class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}

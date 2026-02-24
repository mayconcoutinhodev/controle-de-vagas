"use client"

import { Table } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Tag } from "@chakra-ui/react"



export const TableVagas = () => {
    const [vagas, setVagas] = useState([])

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3000/api/vagas");
            const data = await response.json();
            setVagas(data);
        })()
    }, [])

    return <Table.Root>
        <Table.Header>
            <Table.Row>
                <Table.ColumnHeader>ID</Table.ColumnHeader>
                <Table.ColumnHeader>Chance</Table.ColumnHeader>
                <Table.ColumnHeader>Cidade</Table.ColumnHeader>
                <Table.ColumnHeader>Criado</Table.ColumnHeader>
                <Table.ColumnHeader>Descrição</Table.ColumnHeader>
                <Table.ColumnHeader>Empresa</Table.ColumnHeader>
                <Table.ColumnHeader>Habilidades</Table.ColumnHeader>
                <Table.ColumnHeader>Local</Table.ColumnHeader>
                <Table.ColumnHeader>Qualidade</Table.ColumnHeader>
                <Table.ColumnHeader>Status</Table.ColumnHeader>
                <Table.ColumnHeader>Tipo</Table.ColumnHeader>
                <Table.ColumnHeader>Atualizado</Table.ColumnHeader>
                <Table.ColumnHeader>URL</Table.ColumnHeader>
            </Table.Row>
        </Table.Header>
        <Table.Body>

            {vagas?.map((item: any) => (
                <Table.Row>
                    <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell>{item.chance}</Table.Cell>
                    <Table.Cell>
                        <Tag.Root>
                            <Tag.Label> {item.cidade} </Tag.Label>
                        </Tag.Root>
                    </Table.Cell>
                    <Table.Cell>{item.createdAt}</Table.Cell>
                    <Table.Cell>{item.descricao}</Table.Cell>
                    <Table.Cell>{item.empresa}</Table.Cell>
                    <Table.Cell>{item.habilidades}</Table.Cell>

                    <Table.Cell>
                        <Tag.Root>
                            <Tag.Label> {item.local} </Tag.Label>
                        </Tag.Root>
                    </Table.Cell>
                    <Table.Cell>{item.qualidade}</Table.Cell>
                    <Table.Cell>
                        <Tag.Root>
                            <Tag.Label> {item.status} </Tag.Label>
                        </Tag.Root>
                    </Table.Cell>
                    <Table.Cell>
                        <Tag.Root>
                            <Tag.Label> {item.tipo} </Tag.Label>
                        </Tag.Root>
                    </Table.Cell>
                    <Table.Cell>{item.updatedAt}</Table.Cell>
                    <Table.Cell>
                        <a href={item.url} target="_blank" rel="noreferrer">
                            Link
                        </a>
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
        <Table.Footer>
            <Table.Row>
                <Table.Cell />
            </Table.Row>
        </Table.Footer>
    </Table.Root>
}



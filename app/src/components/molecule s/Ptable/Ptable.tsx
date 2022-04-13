import { Table } from 'components/atoms/Table';
import { usePokemonQuery } from 'graphql/generated';
import { stringify } from 'querystring';
import React, { FC, useEffect, useMemo, useState } from 'react';

type Props = {}

export const Ptable: FC<Props> = (props) => {

    const { data } = usePokemonQuery();
    const [info, setInfo] = useState<{name: string, japName: string }[]>([]);

    const getPokemonInfo = async () => {
        try{
            const information = data?.findManyPokemon
            const newInfo = information?.map((info) => ({
                name: info.name,
                japName: info.japanese_name
            }));
            setInfo(newInfo)
        } catch {
            throw new Error("Couldn't get the information")
        }
    }

    useEffect(() => {
        getPokemonInfo()
    }, [])

    const columns = useMemo(
        () => [
            {
                Header: "All Pokemon",
                columns: [
                    {
                        Header: "Name",
                        accessor: "name"
                    },
                    {
                        Header: "Japanese Name",
                        accessor: "japName"
                    }
                ]
            }
        ], []
    );

    return(
        <div>
            <Table columns={columns} data={info} />
        </div>
    )
};
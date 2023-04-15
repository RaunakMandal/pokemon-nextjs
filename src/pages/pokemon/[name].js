import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import client from '../api/apollo-client'
import { gql } from '@apollo/client'
import Loader from '@/components/Shared/Loader'
import Base from '@/components/Core/Base'
import Image from 'next/image'
import Bubble from '@/components/Shared/Bubble'
import Evolutions from '@/components/Core/EvolutionsCard'

export default function SinglePokemon() {
    const router = useRouter()
    const { name } = router.query

    const [pokemon, setPokemon] = useState(null);
    const [evolutions, setEvolutions] = useState(null);

    const [loading, setLoading] = useState(true);
    const [showEvolutions, setShowEvolutions] = useState(false)

    const getPokemon = async () => {
        const { data } = await client.query({
            query: gql`query pokemon($name: String){
                pokemon(name: $name){
                  id
                  number
                  name
                  weight{
                    minimum
                    maximum
                  }
                  height{
                    minimum
                    maximum
                  }
                  classification
                  types
                  resistant
                  weaknesses
                  fleeRate
                  maxCP
                  maxHP
                  image
                }
              }`,
            variables: {
                name: name,
            },
        });
        setPokemon(data.pokemon)
        setLoading(false)
    };

    const getEvolutions = async () => {
        //
        console.log('getEvolutions')
    }

    useEffect(() => {
        if (name) {
            getPokemon()
        }
    }, [name])

    return (
        <Base >
            <Head>
                <title>Pokemon Page</title>
            </Head>
            <main className="flex flex-col flex-1 justify-center items-center py-4">
                {loading ? <Loader /> : (
                    <div className="flex flex-col items-center py-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start" onClick={() => router.back()}>Back</button>
                        <div className="flex flex-col items-center py-4 gap-2">
                            <span className="text-2xl">{pokemon.name} #0{pokemon.number}</span>
                            <div className="flex gap-4 pt-4">
                                <Image src={pokemon.image} alt={pokemon.name} width={350} height={350} style={{ borderRadius: '8px' }} />
                                <div className="flex flex-col gap-2">
                                    <span className="text-lg">{pokemon.classification}</span>
                                    <span className="text-lg">Height: {pokemon.height.maximum}</span>
                                    <span className="text-lg">Weight: {pokemon.weight.maximum}</span>
                                    <div className="flex flex-col">
                                        <span className="text-lg">Type</span>
                                        <span className="flex mt-2 gap-1">
                                            {pokemon.types.map((type) => (
                                                <Bubble type={type} key={type} />
                                            ))}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg">Resistant</span>
                                        <span className="flex mt-2 gap-1">
                                            {pokemon.resistant.map((resistant) => (
                                                <Bubble type={resistant} key={resistant} />
                                            ))}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg">Weaknesses</span>
                                        <span className="flex mt-2 gap-1">
                                            {pokemon.weaknesses.map((weakness) => (
                                                <Bubble type={weakness} key={weakness} />
                                            ))}
                                        </span>
                                    </div>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getEvolutions}>Show Evolutions</button>
                                </div>
                            </div>
                            {showEvolutions &&
                                <Evolutions />
                            }
                        </div>
                    </div>
                )}
            </main>
        </Base>

    )
}
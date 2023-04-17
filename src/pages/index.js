import Head from "next/head";
import { gql } from "@apollo/client";
import client from "./api/apollo-client";
import PokemonCard from "@/components/Core/PokemonCard";
import Link from "next/link";
import Base from "@/components/Core/Base";

export default function Home({ pokemons }) {
  return (
    <Base>
      <div className="flex flex-col items-center py-4">
        <Head>
          <title>Pokemon Page</title>
        </Head>
        <main className="flex flex-wrap justify-center p-8 gap-4">
          {
            pokemons.map((pokemon) => (
              <Link href={`/pokemon/${pokemon.name}`} key={pokemon.id}>
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              </Link>
            ))
          }
        </main>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Load More
        </button> */}
      </div >
    </Base>
  )
}


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`query pokemons($first: Int!){
      pokemons(first: $first){
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
      first: 60,
    },
  });

  return {
    props: {
      pokemons: data.pokemons,
    },
  };
}
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ElementButton } from 'components/atoms/ElementButton'
import { SearchCard } from 'components/molecules/SearchCard'
import { Logo } from 'components/atoms/Logo';
import Link from 'next/link'
import { LegendaryList } from 'components/molecules/LegendaryList'


const Legendary: NextPage = () => {
    return (
        <div>
            <LegendaryList />
        </div>
    )
}; 

export default Legendary

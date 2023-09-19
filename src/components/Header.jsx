import { Filters } from './Filters.jsx';

export function Header () {
    return (
        <header className='header'>
            <h1 style={{textAlign: 'center'}}>eCommerce App</h1>
            <Filters />
        </header>
    )
}
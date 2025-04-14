import { Link } from "react-router-dom"

export default function Brandcrumbs({ product,page }) {
    return (
        <>
            {
                page === 'products' ? 
                    <div className='brandcrumbs flex gap-2 mb-4'>
                        <Link to={'/'}>Home /</Link>
                        <Link to={'/products'}>Produtos /</Link>
                    </div>
                :
                    null
            }
            {
                page === 'products/' ? 
                    <div className='brandcrumbs flex gap-2 mb-4'>
                        <Link to={'/'}>Home /</Link>
                        <Link to={'/products'}>Produtos /</Link>
                        <Link>{product?.name}</Link>
                    </div>
                :
                    null
            }
        </>
    )
}
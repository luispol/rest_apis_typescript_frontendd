import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Products, { loader as productsLoader,action as updateAvailabilityAction} from './views/Products';
import NewProduct, {action as newProductAction} from './views/NewProduct';
import EditProduct, {loader as editproductLoader, action as editProductAction} from './views/EditProduct';
import { action as deleteProductAction} from './components/ProductDetails';


// En este router vamos a delcarar nuestras rutas en un arreglo
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        // Cihldren lo que va hacer, es que las paginas que esteen en el arreglo, van hacer hijos del layout, por lo tanto el contenido se inyecta en el outlet
        // Cada hijo se define como objeto
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar', // ROA Pattern - Rsource-oriented design
                element: <EditProduct/>,
                loader: editproductLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar',
                action: deleteProductAction
            }
        ]

    }
])
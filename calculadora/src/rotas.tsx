// Removida a importação 'Switch' que daria erro na versão atual
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Contato from './paginas/Contato';
import NotFound from './paginas/NotFound';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* O exact={true} é uma prática antiga, mas mantive para ficar igual ao do professor */}
                <Route path="/" element={<Home/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/contato" element={<Contato/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
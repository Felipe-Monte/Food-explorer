import { FiUser, FiLogOut, FiSearch } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Container, Search } from './styles';

import { TitleLogo } from '../../components/TitleLogo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import imgLogo from '../../assets/poligono.svg'

export function Header() {
    const { signOut } = useAuth();

    return (
        <Container>

            <TitleLogo
                text="Food explorer"
                urlImg={imgLogo} 
                imgSize={30}
                textSize={28}
            />

            <Search>
                <Input
                    icon={FiSearch}
                    placeholder="Busque por pratos ou ingredientes"
                />
            </Search>

            <Button
                title="Pedidos (0)"
            />

            <a type="button" onClick={signOut}>
                <FiLogOut size={24} />
            </a>
        </Container>
    );
};
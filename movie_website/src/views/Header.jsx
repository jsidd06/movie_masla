import React, { useState } from 'react';
import { Container, Input } from 'reactstrap';
import data from "../Data/Movielist"
function Header() {
    const [search, setSearch] = useState('');
  return (
      <Container style={{textAlign: 'center'}} className="mt-2">
        <h1>MovieMasla.com</h1>
        <Input className="mt-5" placeholder="...Search now" onChange={(e) => setSearch(e.target.value)}
         />
      </Container>
  )
}

export default Header;

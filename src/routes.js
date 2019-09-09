/**
 * Arquivo de definição de rotas da aplicação.
 *
 * Bibliotecas adicionais:
 *  - React-Router-Dom
 */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

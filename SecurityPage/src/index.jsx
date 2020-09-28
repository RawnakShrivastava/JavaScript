import React from 'react';
import { render } from 'react-dom';

import MainRoutes from './routes/Routes';

const Main = () => (
    <MainRoutes />
);

render(<Main />, document.getElementById("app"));
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import FirstExample from './examples/hooks/FirstExample';
import SecondExample from './examples/hooks/SecondExample';
import ThirdExample from './examples/hooks/ThirdExample';

import FourthExample from './examples/patterns/FourthExample/FourthExample';
import FourthExampleCompund from './examples/patterns/FourthExample/FourthExampleCompund';
import FourthExampleCompundFlexible from './examples/patterns/FourthExample/FourthExampleCompundFlexible';

import FifthExample from './examples/patterns/FifthExample/FifthExample';
import FifthExampleGetter from './examples/patterns/FifthExample/FifthExampleGetter';

import SixthExample from './examples/patterns/SixthExample/SixthExample';
import SixthExampleControlled from './examples/patterns/SixthExample/SixthExampleControlled';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial' }}>
        <nav>
          Hook tips
          <ul>
            <li>
              <Link to="/firstExample">
                1. Casos de uso para useCallback y useMemo, y cuando no es
                necesario usarlos
              </Link>
            </li>
            <li>
              <Link to="/secondExample">2. useLayoutEffect</Link>
            </li>
            <li>
              <Link to="/thirdExample">
                3. useForwardRef + useImperativeHandle
              </Link>
            </li>
          </ul>
          Patrones
          <ul>
            <li>
              <Link to="/fourthExample">
                4. Compound &amp; Flexible Compound Components
              </Link>
            </li>
            <li>
              <Link to="/fifthExample">
                5. Prop Collections &amp; Prop Getters
              </Link>
            </li>
            <li>
              <Link to="/sixthExample">6. Control Props</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route path="/firstExample">
              <FirstExample />
            </Route>
            <Route path="/secondExample">
              <SecondExample />
            </Route>
            <Route path="/thirdExample">
              <ThirdExample />
            </Route>
            <Route path="/fourthExample">
              <FourthExample />
            </Route>
            <Route path="/fifthExample">
              <FifthExample />
            </Route>
            <Route path="/sixthExample">
              <SixthExample />
            </Route>
          </Switch>
        </nav>
      </div>
    </Router>
  );
}

export default App;

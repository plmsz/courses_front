Full Expansions

imrs - Import React, useState
import * as React from "react";
import { useState } from "react";

imrse - Import React, useState, useEffect
import * as React from "react";
import { useState, useEffect } from "react";

imr - Import React
import * as React from "react";

imrc - Import React, Component
import * as React from "react";
import { Component } from "react";

imrd - Import ReactDOM
import ReactDOM from "react-dom";

impt - Import PropTypes
import PropTypes from "prop-types";

----

export default |;
ffc - Function Component
function (|) {
    return ( | );
}

export default |;
sfc - Stateless Function Component (Arrow function)
const | = props => {
  return ( | );
};

usf - Declare a new state variable using State Hook
const [|, set|] = useState();
Hit Tab to apply CamelCase to function. e.g. [count, setCount]

uef - useEffect Hook
useEffect(() => {
  |
}, []);

____

impc - Import PureComponent
import * as React from "react";
import { PureComponent } from "react";

cc - Class Component
class | extends React.Component {
  render() {
    return <div>|</div>
  }
}

export default |;
ccc - Class Component With Constructor
class | extends Component {
  constructor(props) {
    super(props);
    this.state = { | };
  }
  render() {
    return ( | );
  }
}

export default |;
cpc - Class Pure Component
class | extends PureComponent {
  state = { | },
  render() {
    return ( | );
  }
}

export default |;
cdm - componentDidMount
componentDidMount() {
  |
}

cwm - componentWillMount
//WARNING! To be deprecated in React v17. Use componentDidMount instead.
componentWillMount() {
  |
}
cwrp - componentWillReceiveProps
//WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
componentWillReceiveProps(nextProps) {
  |
}
gds - getDerivedStateFromProps
static getDerivedStateFromProps(nextProps, prevState) {
  |
}
scu - shouldComponentUpdate
shouldComponentUpdate(nextProps, nextState) {
  |
}
cwu - componentWillUpdate
//WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
componentWillUpdate(nextProps, nextState) {
  |
}
cdu - componentDidUpdate
componentDidUpdate(prevProps, prevState) {
  |
}
cwun - componentWillUnmount
componentWillUnmount() {
  |
}
cdc - componentDidCatch
componentDidCatch(error, info) {
  |
}
gsbu - getSnapshotBeforeUpdate
getSnapshotBeforeUpdate(prevProps, prevState) {
  |
}
ss - setState
this.setState({ | : | });

ssf - Functional setState
this.setState(prevState => {
  return { | : prevState.| }
});

ren - render
render() {
  return (
    |
  );
}
rprop - Render Prop
class | extends Component {
  state = { | },
  render() {
    return this.props.render({
      |: this.state.|
    });
  }
}

export default |;
hoc - Higher Order Component
function | (|) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return < | {...this.props} />;
    }
  };
}
cpf - Class Property Function
  | = (e) => {
    |
  }
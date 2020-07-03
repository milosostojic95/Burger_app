import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: true});
  }

  render() {
    return(
      <Aux>
        <Toolbar clicked={this.sideDrawerClosedHandler}/>
        <SideDrawer open={this.state.showSideDrawer} click={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  };
};

export default Layout;

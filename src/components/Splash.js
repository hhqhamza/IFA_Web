import React, {Component} from 'react';
// import auth0Client from '../Auth';
// import { Player, ControlBar } from 'video-react';
import './Splash.css';

function LoadingMessage() {
  return (
    <div className="splash-screen">
      Wait a moment while we load your app.
      <div className="loading-dot">.</div>
    </div>
  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
      };
    }

    // var vid = document.getElementById("myVideo");
    // vid.onplay = function() {
    //   alert("The video has started to play");
    // };

    // async componentDidMount() {
    //   try {
    //     await auth0Client.loadSession();
    //     setTimeout(() => {
    //       this.setState({
    //         loading: false,
    //       });
    //     }, 1500)
    //   } catch (err) {
    //     console.log(err);
    //     this.setState({
    //       loading: false,
    //     });
    //   }
    // }
    // async componentDidMount() {
    //   try {
    //     await auth0Client.loadSession();
    //     setTimeout(() => {
    //       this.setState({
    //         loading: false,
    //       });
    //     }, 1500)
    //   } catch (err) {
    //     console.log(err);
    //     this.setState({
    //       loading: false,
    //     });
    //   }
    // }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;
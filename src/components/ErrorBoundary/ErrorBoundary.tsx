import React, {Component} from 'react'
import './ErrorBoundary.scss'
import NavBarComponent from '../../components/homePageComponents/Navbar/navBarComp'
interface IState {
  hasError: boolean
}

// eslint-disable-next-line require-jsdoc
export default class ErrorBoundary extends Component<any, IState> {
  state = {
    hasError: false,
  }

  // eslint-disable-next-line require-jsdoc
  componentDidCatch(error: any, info: {}) {
    console.log('error', error)
    console.log('info', info)
    this.setState({hasError: true})
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    if (this.state.hasError) {
      return (
        <div className='App'>
          <NavBarComponent/>        
          <p className={'errorBound'} style={{marginTop:"100px"}}>Ой! Произошла ошибка :(</p>
        </div>
      )
    } else {
      return this.props.children
    }
  }
}

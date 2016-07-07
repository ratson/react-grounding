import Headroom from 'react-headroom'
import withProps from 'recompose/withProps'

class Grounding extends Headroom {
  constructor(...args) {
    super(...args)

    const superUnpin = this.unpin.bind(this)
    this.unpin = () => {
      superUnpin()
      this.setState({
        translateY: 0,
      })
    }
  }

  componentDidMount() {
    super.componentDidMount()

    this.pin()
  }
}

export default withProps(({style}) => ({
  style: {
    ...style,
    top: 'auto',
    bottom: 0,
  },
}))(Grounding)

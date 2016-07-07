import Headroom from 'react-headroom'

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

export default Grounding

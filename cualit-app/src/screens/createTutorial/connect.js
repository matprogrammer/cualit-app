import { connect } from 'react-redux'
import { compose } from 'redux'
import addTutorial from '../../actions/addTutorial'
import showToast from '../../actions/showToast'
import { getShowToast } from '../../selectors/selectors'

const mapStateToProps = (state) => ({
  toastProps: getShowToast(state),
})

const mapDispatchToProps = {
  addTutorial,
  showToast,
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default compose(withConnect)

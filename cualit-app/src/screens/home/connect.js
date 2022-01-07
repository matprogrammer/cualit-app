import { connect } from 'react-redux'
import { compose } from 'redux'
import getTutorials from '../../actions/getTutorials'
import removeAllTutorials from '../../actions/removeAllTutorials'
import findTutorial from '../../actions/findTutorial'
import showToast from '../../actions/showToast'
import { tutorialsLoading, getShowToast } from '../../selectors/selectors'

const mapStateToProps = (state) => ({
  tutorialsLoading: tutorialsLoading(state),
  toastProps: getShowToast(state),
})

const mapDispatchToProps = {
  getTutorials,
  removeAllTutorials,
  showToast,
  findTutorial,
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default compose(withConnect)

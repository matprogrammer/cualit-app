import { connect } from 'react-redux'
import { compose } from 'redux'
import getTutorial from '../../actions/getTutorial'
import editTutorial from '../../actions/editTutorial'
import deleteTutorial from '../../actions/deleteTutorial'
import showToast from '../../actions/showToast'
import { getShowToast } from '../../selectors/selectors'

const mapStateToProps = (state) => ({
  toastProps: getShowToast(state),
})

const mapDispatchToProps = {
  getTutorial,
  editTutorial,
  deleteTutorial,
  showToast,
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default compose(withConnect)

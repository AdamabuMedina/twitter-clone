import "./Widgets.css"
import WidgetsContainer from "./WidgetsContainer/WidgetsContainer";
import WidgetsInput from './WidgetsInput/WidgetsInput';

const Widgets = () => {
  return (
    <div className="widgets">
      <WidgetsInput />
      <WidgetsContainer />
    </div>
  )
}

export default Widgets
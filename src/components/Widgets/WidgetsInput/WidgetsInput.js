import SearchIcon from '@mui/icons-material/Search';

const WidgetsInput = () => {
  return (
    <div className="widgets__input">
      <SearchIcon className="widgets__searchIcon" />
      <input placeholder="Search Twitter" type="text" />
    </div>
  )
}

export default WidgetsInput
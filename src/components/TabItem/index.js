import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickActiveId = () => {
    updateActiveId(tabId)
  }
  const styledActiveTab = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${styledActiveTab}`}
        onClick={onClickActiveId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

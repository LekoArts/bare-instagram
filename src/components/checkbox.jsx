import * as React from 'react'

const styles = {
  container: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  hiddenCheckbox: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    width: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
  },
  styledCheckbox: {
    display: 'inline-block',
    width: '24px',
    height: '24px',
    transition: 'all 150ms',
  },
  icon: {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2px',
  },
}

const Checkbox = ({ name, checked, onChange }) => (
  <div style={styles.container}>
    <input
      style={styles.hiddenCheckbox}
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <div
      style={styles.styledCheckbox}
      className={
        checked
          ? 'rounded bg-green-600 text-white'
          : 'rounded bg-gray-200 dark:bg-gray-600'
      }
    >
      <svg
        style={{ ...styles.icon, visibility: checked ? 'visible' : 'hidden' }}
        viewBox="0 0 24 24"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  </div>
)

export default Checkbox

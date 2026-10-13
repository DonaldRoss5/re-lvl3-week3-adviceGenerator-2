import diceIcon from '../assets/icon-dice.svg'

function AdviceButton({ onClick, disabled = false }) {
  return (
    <button
      type="button"
      className="advice-button"
      onClick={onClick}
      disabled={disabled}
      aria-label="Get new advice"
    >
      <img className="advice-button__icon" src={diceIcon} alt="" />
    </button>
  )
}

export default AdviceButton

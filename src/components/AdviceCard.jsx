import dividerDesktop from '../assets/pattern-divider-desktop.svg'
import dividerMobile from '../assets/pattern-divider-mobile.svg'

function AdviceCard({ id, advice, children }) {
  return (
    <article className="advice-card" aria-live="polite">
      <h2 className="advice-card__label">Advice #{id}</h2>
      <blockquote className="advice-card__quote">
        <p className="advice-card__text">&ldquo;{advice}&rdquo;</p>
      </blockquote>
      <picture className="advice-card__divider">
        <source media="(min-width: 600px)" srcSet={dividerDesktop} />
        <img src={dividerMobile} alt="" />
      </picture>
      {children && <div className="advice-card__actions">{children}</div>}
    </article>
  )
}

export default AdviceCard

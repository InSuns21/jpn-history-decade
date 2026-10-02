interface HistoricalFigureProps {
  imageUrl: string
  sourceUrl: string
  alt: string
  title: string
  dateLabel: string
  credit: string
  license: string
  className?: string
  priority?: boolean
}

export function HistoricalFigure({
  imageUrl,
  sourceUrl,
  alt,
  title,
  dateLabel,
  credit,
  license,
  className,
  priority = false,
}: HistoricalFigureProps) {
  const classes = ['historical-figure', className].filter(Boolean).join(' ')

  return (
    <figure className={classes}>
      <a
        className="historical-figure__image-link"
        href={sourceUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={title + 'の出典ページを開く'}
      >
        <img
          src={imageUrl}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
      </a>
      <figcaption>
        <div className="historical-figure__caption-main">
          <span>{dateLabel}</span>
          <strong>{title}</strong>
        </div>
        <p>
          {credit}
          {' · '}
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            {license} ↗
          </a>
        </p>
      </figcaption>
    </figure>
  )
}

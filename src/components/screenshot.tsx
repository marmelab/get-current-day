import { clsx } from 'clsx'

export function Screenshot({
  width,
  height,
  src,
  className,
}: {
  width: number
  height: number
  src: string
  className?: string
}) {
  return (
    <div
      style={{ '--width': width, '--height': height } as React.CSSProperties}
      className={clsx(
        className,
        'relative aspect-[var(--width)/var(--height)] [--radius:var(--radius-xl)]',
      )}
    >
      <div className="absolute -inset-[var(--padding)] rounded-[calc(var(--radius)+var(--padding))] ring-1 shadow-xs ring-black/5 [--padding:--spacing(2)]" />
      <img
        alt=""
        src={src}
        className="h-full rounded-[var(--radius)] ring-1 shadow-2xl ring-black/10"
      />
    </div>
  )
}

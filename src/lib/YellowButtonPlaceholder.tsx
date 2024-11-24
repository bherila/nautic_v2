export default function YellowButtonPlaceholder({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-row">
      <div className="w-col w-col-12" style={{ textAlign: 'center' }}>
        <button
          type="submit"
          disabled={true}
          className={'buy-button button-icon w-button disabled'}
          style={{ paddingLeft: '20px', paddingRight: '20px' }}
        >
          {children}
        </button>
      </div>
    </div>
  )
}

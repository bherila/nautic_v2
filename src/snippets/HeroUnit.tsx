'use client'
import Image from 'next/image'

export default function HeroUnit(props: {
  title: string
  children: any
  img: any
}) {
  const { title, children, img } = props
  return (
    <div className="page-header-container page-industries-header-container w-container">
      <div className="page-header-container header-image">
        <div className="page-header-image-container animate__animated animate__fadeIn">
          <img src={img} loading="eager" alt="" className="featured-img" />
        </div>
      </div>
      <div className="page-header-container header-content">
        <h1 className="header-content-title-yellow">
          {title}
          <br />
          <span className="header-content-title-white-span">
            Plan Activation
          </span>
        </h1>
        <div className="page-header-connector-block page-header-connector">
          <div
            className="grow-right-animation"
            style={{ width: '100%', height: '22px' }}
          >
            <Image
              src={require('../images/page-header-connector.svg')}
              loading="lazy"
              alt=""
              className="image"
            />
          </div>
        </div>
        <p className="header-content-subtitle">{children}</p>
      </div>
    </div>
  )
}

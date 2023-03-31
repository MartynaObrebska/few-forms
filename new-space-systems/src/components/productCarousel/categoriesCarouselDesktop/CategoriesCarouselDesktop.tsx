import { useRef, useState } from "react";
import Carousel from "react-simply-carousel";
import Arrow from '../../../assets/arrow.svg'
interface Props {
  slides: JSX.Element[];
  categoriesContentRef: React.MutableRefObject<HTMLDivElement | null>
}

function CategoriesCarouselDesktop(props: Props) {
  const { slides, categoriesContentRef } = props

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [sliderLeft, setSliderLeft] = useState(0)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const sliderContainerRef = useRef<HTMLDivElement | null>(null)
  const sliderWidth = 325
  let offsetX = 0
  const maxLeft = sliderWidth - 65

  const move = (e: MouseEvent): any => {
    const listContainerElement = (document.getElementsByClassName('items-list-container') as HTMLCollectionOf<HTMLElement>)[0]
    const categoriesContentWidth = categoriesContentRef.current?.getBoundingClientRect().width
    if (sliderRef.current && listContainerElement && categoriesContentWidth) {
      const listContainerWidth = listContainerElement.getBoundingClientRect().width
      const calculatedLeft = e.pageX - offsetX
      const left = calculatedLeft >= 0 ? calculatedLeft : 0
      const newLeft = maxLeft <= calculatedLeft ? maxLeft : left
      sliderRef.current.style.left = `${newLeft}px`
      const newTransitionForContainer = newLeft * (listContainerWidth - categoriesContentWidth) / maxLeft
      listContainerElement.style.transform = `translateX(-${newTransitionForContainer}px)`

    }
  }

  const add = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    offsetX = document.getElementsByClassName('slider-container')[0].getBoundingClientRect().left + 32.5
    move(e as unknown as MouseEvent)
    sliderContainerRef.current?.addEventListener('mousemove', move)
  }
  const remove = () => {
    console.log('called')
    const listContainerElement = (document.getElementsByClassName('items-list-container') as HTMLCollectionOf<HTMLElement>)[0]
    const categoriesContentWidth = categoriesContentRef.current?.getBoundingClientRect().width
    if (sliderRef.current && listContainerElement && categoriesContentWidth) {
      const oldLeft = parseFloat(sliderRef.current.style.left)
      const newLeft = oldLeft * 4 / maxLeft
      sliderRef.current.style.left = `${newLeft}px`
      setActiveSlideIndex(parseFloat((newLeft * 4 / maxLeft).toFixed()))
    }
    sliderContainerRef.current?.removeEventListener('mousemove', move)
  }
  const getSliderLeft = () => {
    const listContainerElement = document.querySelector('.items-list-container')
    const categoriesContentWidth = categoriesContentRef.current?.getBoundingClientRect().width
    const sliderElement = sliderRef.current
    if (listContainerElement && categoriesContentWidth && sliderElement) {
      const matrix = window.getComputedStyle(listContainerElement).getPropertyValue('transform')
      const listContainerWidth = listContainerElement.getBoundingClientRect().width
      const numberOfListContainerLeft = (-parseFloat(matrix.split(',')[4]))
      const leftToSet = numberOfListContainerLeft * maxLeft / (listContainerWidth - categoriesContentWidth)
      sliderElement.style.transition = "all .1s"
      sliderElement.style.left = `${leftToSet}px`
      setTimeout(() => {
        sliderElement.style.transition = "all 0s"
      })
    }
  }
  const setCarouselLeft = (forward: any) => { console.log(event) }
  return <>
    <Carousel
      containerProps={{
        style: {
          width: "100%",
          justifyContent: "space-between",
          userSelect: "none",
          position: 'relative',
        }
      }}
      swipeTreshold={20}
      infinite={false}
      forwardBtnProps={{
        children: <img src={Arrow} alt="arrow-next" />,
        onClick: () => setCarouselLeft(true),
        style: {
          border: 'none',
          background: '#3A3A3A',
          width: 35,
          height: 35,
          borderRadius: '50%',
          position: 'absolute',
          zIndex: 2,
          top: 'calc(50% - 17.5px)',
          right: '28px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: '2px'
        }
      }}
      backwardBtnProps={{
        children: <img src={Arrow} alt="arrow-next" style={{ transform: 'rotate(180deg)' }} />,
        onClick: () => setCarouselLeft(false),
        style: {
          border: 'none',
          background: '#3A3A3A',
          width: 35,
          height: 35,
          borderRadius: '50%',
          position: 'absolute',
          zIndex: 2,
          top: 'calc(50% - 17.5px)',
          left: '28px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: '2px'
        }
      }}
      speed={400}
      activeSlideIndex={activeSlideIndex}
      onAfterChange={getSliderLeft}
      onRequestChange={setActiveSlideIndex}
      itemsListProps={{
        className: 'items-list-container',
        style: {
          position: 'relative',
        }
      }}
    >
      {slides}
    </Carousel>
    <div ref={sliderContainerRef} className="slider-root" onMouseDown={add} onMouseLeave={remove} onMouseOut={remove}>
      <div className="slider-container" >
        <div ref={sliderRef} className="slider" ></div>
      </div>
    </div>
  </>
}

export default CategoriesCarouselDesktop;

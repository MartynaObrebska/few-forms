import './recognisedBy.css'
import firm1 from '../../assets/firm1.webp'
import firm2 from '../../assets/firm2.webp'
import firm3 from '../../assets/firm3.webp'
import firm4 from '../../assets/firm4.webp'
import firm5 from '../../assets/firm5.webp'

const RecognisedBy = () => {
  const firms = [
    { image: firm1, altText: 'logo-of-leaders-for-climate-action' },
    { image: firm2, altText: 'logo-of-concordia-des-ign' },
    { image: firm3, altText: 'logo-of-canal+' },
    { image: firm4, altText: 'logo-of-clab-150' },
    { image: firm5, altText: 'logo-of-reactor-x' }
  ]
  return <div className='recognised-by'>
    <h2>We’ve been part of</h2>
    <div className='recognised-by-columns'>
      {
        firms.map((firm) =>
          <div className='recognised-by-column'>
            <img src={firm.image} alt={firm.altText} />
          </div>
        )
      }
    </div>
  </div>
}

export default RecognisedBy
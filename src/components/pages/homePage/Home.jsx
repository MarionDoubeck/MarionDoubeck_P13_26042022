import Features from './Features'
import Hero from './Hero'
import {features} from './FeaturesContent'


const Home = () => {

  let featuresReturn = []
  for (const feature of features) {
    featuresReturn.push(<Features key={feature.id} icon={feature.icon} title={feature.title} description={feature.description}/>);
  }

  return (
    <>
    <Hero />
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresReturn}
    </section>
    </>
  )
}

export default Home
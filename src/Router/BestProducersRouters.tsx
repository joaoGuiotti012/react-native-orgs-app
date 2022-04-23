import React from 'react'
import ProducerRouters from './ProducerRouters'
import BestProducers from '../screens/BestProducers'

export default function BestProducersRouters() {
  return <ProducerRouters DefaultComponent={BestProducers} />
}

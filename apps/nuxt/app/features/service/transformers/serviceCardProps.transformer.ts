import type { ServiceCard, ServiceCardList } from '@repo/payload'
import type { ServiceCardProps } from '~/components/service/ServiceCard.vue'
import { IconTransformer } from '~/features/icon/transformers/icon.transformer'

export class ServiceCardPropsTransformer {
  static fromServiceCard(service: ServiceCard, index: number): ServiceCardProps {
    return {
      color: 'dark',
      icon: service.icon
        ? IconTransformer.fromDto(service.icon)
        : null,
      index,
      title: service.title || null,
      link: service.link,
    }
  }

  static fromServiceCardList(list: ServiceCardList): ServiceCardProps[] {
    const serviceCards: ServiceCardProps[] = []

    if (list === null) {
      return serviceCards
    }

    list.forEach((service, index) => {
      const serviceCard = this.fromServiceCard(service.serviceCard, index)
      serviceCards.push(serviceCard)
    })

    return serviceCards
  }
}

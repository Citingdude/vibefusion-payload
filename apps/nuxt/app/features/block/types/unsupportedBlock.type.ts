import type { BaseBlock } from '~/features/block/types/baseBlock.type'

export interface UnsupportedBlock extends BaseBlock {
  blockType: 'unsupported'
}

import { PitFilePacket, PitFileRequest } from './PitFilePacket'

export class FlashPartPitFilePacket extends PitFilePacket {
  fileSize: number

  constructor(fileSize: number) {
    super(PitFileRequest.Part)
    this.fileSize = fileSize
  }

  pack() {
    super.pack()

    this.packInteger(PitFilePacket.dataSize, this.fileSize)
  }
}

import { PitFilePacket, PitFileRequest } from './PitFilePacket'

export class EndPitFileTransferPacket extends PitFilePacket {
  fileSize: number

  constructor(fileSize: number) {
    super(PitFileRequest.EndTransfer)
    this.fileSize = fileSize
  }

  pack() {
    super.pack()

    this.packInteger(PitFilePacket.dataSize, this.fileSize)
  }
}

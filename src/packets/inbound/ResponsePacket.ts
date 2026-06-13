import { InboundPacket } from './InboundPacket'

export enum ResponseType {
  SendFilePart = 0x00,
  SessionSetup = 0x64,
  PitFile = 0x65,
  FileTransfer = 0x66,
  EndSession = 0x67
}

export class ResponsePacket extends InboundPacket {
  responseType: ResponseType

  constructor(responseType: ResponseType) {
    super(8)
    this.responseType = responseType
  }

  static get dataSize() {
    return 4
  }

  unpack(): Promise<void> {
    const receivedResponseType: ResponseType = this.unpackInteger(0)
    if (receivedResponseType !== this.responseType) {
      this.responseType = receivedResponseType
      return Promise.reject(new Error('requested and received response types differ'))
    }
    return Promise.resolve()
  }
}

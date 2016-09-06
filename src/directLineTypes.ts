export interface BotConversation {
    conversationId: string,
    token: string,
    eTag?: string,
    streamUrl?: string
}

export interface BotActivity {
    type: string
}

interface BotAttachmentBase {
    contentType: string
}

export interface BotFileAttachment {
    contentType: "image/png" | "image/jpg" | "image/jpeg",    
    contentUrl: string,
    name?: string
}

export interface BotButton {
    type: string,
    title: string,
    value: string
    image?: string,
}

export interface BotHeroCard {
    contentType: "application/vnd.microsoft.card.hero",
    title?: string,
    subtitle?: string,
    text?: string,
    images?: {url: string}[],
    buttons?: BotButton[],

} 

export type BotAttachment = BotFileAttachment | BotHeroCard; 

export interface BotMessage
{
    id?: string,
    conversation?: {id: string},
    timestamp?: string,
    from?: {id: string},
    text?: string,
    local?: string,
    textFormat?: string,
    channelData?: any,
    attachmentLayout?: "list" | "carousel",
    attachments?: BotAttachment[],
    eTag?: string,
    channelId?: string,
    entities?: any[]
}

/*
export interface BotMessageGroup
{
    messages: BotMessage[],
    watermark?: string,
    eTag?: string
}
*/
 
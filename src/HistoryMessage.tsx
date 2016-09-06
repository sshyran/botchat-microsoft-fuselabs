import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BotFileAttachment, BotHeroCard } from './directLineTypes';
import { Message, HistoryActions } from './App.tsx';
import { HeroCard } from './HeroCard.tsx';

const textify = (text:string) =>
    text.split("\n").map((line, index) =>
        <span>{ index > 0 ? <br/> : null }{ line }</span>
    );

export const HistoryMessage = (props: {
    message: Message,
    actions: HistoryActions
}) => {
    let inside;
    console.log("rendering message", props.message);
    if (props.message.attachments && props.message.attachments.length > 0) {
        const attachment = props.message.attachments[0];
        if (attachment.contentType === "application/vnd.microsoft.card.hero")
            inside = <HeroCard actions={ props.actions } content={ attachment as BotHeroCard } />;
        else if (attachment.contentType === "image/png")
            inside = <img src={ (attachment as BotFileAttachment).contentUrl }/>;
    } else {
        inside = <span>{ textify(props.message.text) }</span>;
    }

    return (
        <div className={ 'wc-message wc-message-from-' + (props.message.fromBot ? 'bot' : 'me') }>
            <div className="wc-message-content">
                <svg className="wc-message-callout">
                    <path className="point-left" d="m0,0 h12 v10 z" />
                    <path className="point-right" d="m0,10 v-10 h12 z" />
                </svg>
                { inside }
            </div>
            <div className="wc-message-from">
                { props.message.fromBot ? props.message.from.id : 'you' }
            </div>
        </div>
    );
}
